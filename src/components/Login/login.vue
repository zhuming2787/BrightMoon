<script setup>
import { ref, defineProps, watch, computed, onMounted } from 'vue';
import { reqLogin, reqRegister, getUserInfoById } from '@/api/user';
import { ElNotification, ElMessage } from 'element-plus';
import { user } from '@/store/index.js';
import { _removeLocalItem, _setLocalItem } from '@/utils/tool';
import { _encrypt, _decrypt } from '@/utils/encipher';
const userStore = user();
import { throttle } from '@/utils/tool.js';

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
});

const top = ref(0);
const left = ref(0);
let startX, startY;
let startTop, startLeft;
const isDragging = ref(false);

const startDrag = e => {
	e.stopPropagation();

	isDragging.value = false;
	startX = e.clientX;
	startY = e.clientY;
	startTop = top.value;
	startLeft = left.value;

	document.addEventListener('mouseup', stopDrag);
	document.addEventListener('mousemove', throttledOnDrag);
};

const onDrag = e => {
	const dx = e.clientX - startX;
	const dy = e.clientY - startY;

	isDragging.value = true;
	top.value = startTop + dy;
	left.value = startLeft + dx;
};
const throttledOnDrag = throttle(onDrag, 5);

const stopDrag = () => {
	if (isDragging.value) {
		const preventClick = e => {
			e.stopImmediatePropagation();
			e.preventDefault();
			document.removeEventListener('click', preventClick, true);
		};
		document.addEventListener('click', preventClick, true);
	}

	document.removeEventListener('mousemove', throttledOnDrag);
	document.removeEventListener('mouseup', stopDrag);
	isDragging.value = false;
};

const emit = defineEmits(['update:modelValue', 'login-success']);
const visible = computed({
	get() {
		return userStore.showLogin;
	},
	set(val) {
		((userStore.showLogin = val), emit('update:modelValue', val));
	},
});

const loginForm = ref({
	username: '',
	password: '',
});

const registerForm = ref({
	nickname: '',
	username: '',
	password: '',
});

/**
 * 关闭登录弹窗
 */
const closeModal = () => {
	visible.value = false;
};

/**
 * 登录表单验证
 */
const validateLoginForm = () => {
	const { username, password } = loginForm.value;
	if (!username.trim()) {
		ElMessage.error('请输入用户名!');
		return false;
	}
	if (!password.trim()) {
		ElMessage.error('请输入密码!');
		return false;
	}
	return true;
};
/**
 * 注册表单验证
 */
const validateRegisterForm = () => {
	const { nickname, username, password } = registerForm.value;
	if (!nickname.trim()) {
		ElMessage.error('请输入昵称!');
		return false;
	}
	if (!username.trim()) {
		ElMessage.error('请输入用户名!');
		return false;
	}
	if (password.length < 6) {
		ElMessage.error('密码不能小于6位!');
		return false;
	}
	return true;
};

/**
 * 登录逻辑验证
 * @param e
 */
const handleLogin = async e => {
	e.preventDefault();

	if (!validateLoginForm()) return;

	try {
		const res = await onLogin(loginForm.value, 'login');

		ElNotification.success({
			offset: 60,
			title: '登录成功',
			message: '欢迎回来!',
		});
		closeModal();
		loginForm.value = { username: '', password: '' }; //清空表单
	} catch (err) {
		console.error('登录失败：', err);
		ElMessage.error(err.response?.data?.message || '登录失败，请检查账号密码');
	}
};
/**
 * 注册提交验证
 * @param e
 */
const handleRegister = async e => {
	e.preventDefault();
	if (!validateRegisterForm()) return;

	try {
		const res = await reqRegister(registerForm.value);
		ElMessage.success({ offset: 60, message: `注册成功!` });
		loginForm.value.password = registerForm.value.password;
		loginForm.value.username = registerForm.value.username;

		onLogin(loginForm.value, 'register');
		registerForm.value = { nickname: '', username: '', password: '' }; // 清空注册表单
		closeModal();

		// 按需注册引导
		const { driver } = await import('driver.js');
		await import('driver.js/dist/driver.css');
		const driverObj = driver({
			showProgress: true,
			steps: [
				{ element: '#homeBtn', popover: { title: '主页', description: '这里将按页面展示你可能"喜欢"的内容' } },
				{
					element: '#recommentBtn',
					popover: { title: '推荐', description: '这里将为你推荐你可能"喜欢"的内容"' },
				},
				{ element: '#friendBtn', popover: { title: '朋友', description: '这里可以和你的好友happy' } },
				{ element: '#selfBtn', popover: { title: '我的', description: '这里将展示有关你的信息' } },
				{ element: '#notesBtn', popover: { title: '文章', description: '这里你可以发布一些文章' } },
				{ element: '#drawBtn', popover: { title: '画画', description: '这里可以画一些有趣的画，并且上传' } },
				{ element: '#pixelBtn', popover: { title: '像素', description: '这里可以画一些有趣的像素，并且上传' } },
			],
		});
		driverObj.drive();
	} catch (err) {
		console.error('注册失败：', err);
		ElMessage.error(err.response?.data?.message || '注册失败，请稍后重试');
	}
};
/**
 * 真正的登录逻辑
 * @param form
 * @param type
 */
const onLogin = async (form, type = 'login') => {
	const res = await reqLogin(form);
	console.log(`res:${res}`);

	if (res && res.code === 0) {
		// 保存token
		await userStore.setTokens({
			accessToken: res.result.token,
			refreshToken: res.result.refreshToken,
		});

		if (type === 'register') {
			_setLocalItem('loginForm', _encrypt(form));
		} else {
			// 如果是登录
			_setLocalItem('loginForm', _encrypt(form));
		}

		// 获取并保存当前用户信息
		console.log('保存当前用户信息ing...');
		const userInfo = res.result.userinfo;

		emit('login-succes', userInfo);
		await userStore.setUserInfo(userInfo);
		return true;
	} else {
		ElNotification({
			offset: 60,
			title: '登录失败',
			message: res.message,
			type: 'error',
		});
		throw new Error('登录失败!');
	}
};
onMounted(() => {
	const modal = document.querySelector('.wrapper');
	if (modal === null) {
		top.value = window.innerHeight / 2;
		left.value = window.innerWidth / 2;
		return;
	}
	const modalWidth = modal.offsetWidth;
	const modalHeight = modal.offsetHeight;

	top.value = window.innerHeight / 2 - modalHeight / 2;
	left.value = window.innerWidth / 2 - modalWidth / 2;
});
</script>

<template>
	<!-- 弹窗遮罩层：控制整个表单的显隐  -->
	<div v-if="visible" class="login-modal-mask" @dblclick="closeModal">
		<!-- 表单容器：阻止遮罩点击事件冒泡 -->
		<div class="login-modal-content" @dblclick.stop>
			<div class="wrapper" @mousedown="startDrag" :style="{ top: top + 'px', left: left + 'px' }" @click.stop>
				<div class="card-switch">
					<label class="switch">
						<input type="checkbox" class="toggle" />
						<span class="slider"></span>
						<span class="card-side"></span>
						<div class="flip-card__inner">
							<div class="flip-card__front">
								<div class="title">登录</div>
								<form class="flip-card__form" @submit="handleLogin">
									<input
										v-model="loginForm.username"
										class="flip-card__input"
										name="username"
										placeholder="Username"
									/>
									<input
										v-model="loginForm.password"
										class="flip-card__input"
										name="password"
										placeholder="password"
										type="password"
									/>
									<button class="flip-card__btn">Let`s go!</button>
								</form>
							</div>
							<div class="flip-card__back">
								<div class="title">注册</div>
								<form class="flip-card__form" @submit="handleRegister">
									<input
										v-model="registerForm.nickname"
										class="flip-card__input"
										placeholder="Name"
										type="name"
									/>
									<input
										v-model="registerForm.username"
										class="flip-card__input"
										name="username"
										placeholder="Username"
									/>
									<input
										v-model="registerForm.password"
										class="flip-card__input"
										name="password"
										placeholder="password"
										type="password"
									/>
									<button class="flip-card__btn">Confirm!</button>
								</form>
							</div>
						</div>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
// 弹窗遮罩层
.login-modal-mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5); // 半透明遮罩
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000; // 确保弹窗在最上层
}

// 表单弹窗内容容器
.login-modal-content {
	position: relative;
	border: 2px solid;
	border-radius: 8px;
	// 适配你的表单尺寸
	width: 350px;
	height: 450px;
	display: flex;
	justify-content: center;
	align-items: center;
}

// 关闭按钮
.login-close-btn {
	position: absolute;
	top: 10px;
	right: 15px;
	font-size: 20px;
	color: #666;
	cursor: pointer;
	&:hover {
		color: #333;
	}
}

.wrapper {
	--input-focus: #2d8cf0;
	--font-color: #323232;
	--font-color-sub: #666;
	--bg-color: #fff;
	--bg-color-alt: #666;
	--main-color: #323232;
	position: fixed !important;
	top: 1000px;
	left: 1000px;
}
/* switch card */
.switch {
	transform: translateY(-200px);
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	width: 50px;
	height: 20px;
}

.card-side::before {
	position: absolute;
	content: 'Log in';
	left: -70px;
	top: 0;
	width: 100px;
	text-decoration: underline;
	color: var(--font-color);
	font-weight: 600;
}

.card-side::after {
	position: absolute;
	content: 'Sign up';
	left: 70px;
	top: 0;
	width: 100px;
	text-decoration: none;
	color: var(--font-color);
	font-weight: 600;
}

.toggle {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	box-sizing: border-box;
	border-radius: 5px;
	border: 2px solid var(--main-color);
	box-shadow: 4px 4px var(--main-color);
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--bg-colorcolor);
	transition: 0.3s;
}

.slider:before {
	box-sizing: border-box;
	position: absolute;
	content: '';
	height: 20px;
	width: 20px;
	border: 2px solid var(--main-color);
	border-radius: 5px;
	left: -2px;
	bottom: 2px;
	background-color: var(--bg-color);
	box-shadow: 0 3px 0 var(--main-color);
	transition: 0.3s;
}

.toggle:checked + .slider {
	background-color: var(--input-focus);
}

.toggle:checked + .slider:before {
	transform: translateX(30px);
}

.toggle:checked ~ .card-side:before {
	text-decoration: none;
}

.toggle:checked ~ .card-side:after {
	text-decoration: underline;
}

/* card */

.flip-card__inner {
	width: 300px;
	height: 350px;
	position: relative;
	background-color: transparent;
	perspective: 1000px;
	/* width: 100%;
    height: 100%; */
	text-align: center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
}

.toggle:checked ~ .flip-card__inner {
	transform: rotateY(180deg);
}

.toggle:checked ~ .flip-card__front {
	box-shadow: none;
}

.flip-card__front,
.flip-card__back {
	padding: 20px;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	background: lightgrey;
	gap: 20px;
	border-radius: 5px;
	border: 2px solid var(--main-color);
	box-shadow: 4px 4px var(--main-color);
}

.flip-card__back {
	width: 100%;
	transform: rotateY(180deg);
}

.flip-card__form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
}

.title {
	user-select: none;
	-webkit-user-select: none; /* 兼容webkit内核浏览器（Chrome/Safari） */
	-moz-user-select: none; /* 兼容Firefox */
	-ms-user-select: none; /* 兼容IE/Edge */
	margin: 20px 0 20px 0;
	font-size: 25px;
	font-weight: 900;
	text-align: center;
	color: var(--main-color);
}

.flip-card__input {
	width: 250px;
	height: 40px;
	border-radius: 5px;
	border: 2px solid var(--main-color);
	background-color: var(--bg-color);
	box-shadow: 4px 4px var(--main-color);
	font-size: 15px;
	font-weight: 600;
	color: var(--font-color);
	padding: 5px 10px;
	outline: none;
}

.flip-card__input::placeholder {
	color: var(--font-color-sub);
	opacity: 0.8;
}

.flip-card__input:focus {
	border: 2px solid var(--input-focus);
}

.flip-card__btn:active,
.button-confirm:active {
	box-shadow: 0px 0px var(--main-color);
	transform: translate(3px, 3px);
}

.flip-card__btn {
	margin: 20px 0 20px 0;
	width: 120px;
	height: 40px;
	border-radius: 5px;
	border: 2px solid var(--main-color);
	background-color: var(--bg-color);
	box-shadow: 4px 4px var(--main-color);
	font-size: 17px;
	font-weight: 600;
	color: var(--font-color);
	cursor: pointer;
}
</style>
