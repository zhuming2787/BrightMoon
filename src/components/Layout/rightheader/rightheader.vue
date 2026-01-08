<script setup>
import { computed, ref } from 'vue';
import { user } from '@/store/index';
const userStore = user();
import {useRouter} from 'vue-router';
import { ElNotification } from 'element-plus';
const router = useRouter();
const userInfo = computed(() => userStore.getUserInfo || {}); 
import {ElMessage,ElMessageBox} from 'element-plus';

// 文本差分滚动动画
import { Ticker } from '@tombcato/smart-ticker/vue';
import '@tombcato/smart-ticker/style.css';

const logout = async () => {
    ElMessageBox.confirm(
        '你确定要退出吗?',
        '温馨提示',
        {
            confirmButtonText: '是',
            cancelButtonText: 'Cancel',
            type: 'warning',
        }
    )
        .then(()=>{
            userStore.clearUserInfo();
            router.push('/home');
            ElMessage({
                type: 'success',
                message: '退出成功!',
            })
        })
        .catch(()=>{
            ElMessage({
                type: 'info',
                message: '已取消退出',
            })
        })
}
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

// 是否登录？
const isLogin = computed(()=>{
  return !!userStore.getToken;
})


const price = computed(()=>{
  return isLogin.value ? t('Layout.mine') : t('Layout.login');
})

const handleButtonClick = () => {
  if(isLogin.value){
    router.push('/self');
  }else{
    userStore.setShowLogin(true);
  }
}


/**
 * 切换语言
 * @param lang 语言
 */
const switchLang = (lang) => {
	console.log(locale);
	
  locale.value = lang // 修改当前语言
  localStorage.setItem('app-lang', lang) // 持久化到本地存储
  ElMessage.success(t('tips.switchSuccess'))
}

// 计算当前语言的文本描述
const currentLangText = computed(() => {
  return locale.value === 'zh-CN' ? '中文' : 'English'
})

import ThemeToggle from '@/components/ThemeToggle/index.vue';
</script>

<template>
    <header class="right-header">
        
        <ThemeToggle class="theme"/>

		<!-- 中间搜索栏 -->
        <div class="search" @click.prevent="toggleTheme">
            <div class="placeholder"></div>
            <input type="text" class="search__input" placeholder="Search...">
            <button class="search__button">
                <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
            </button>
        </div>

        <el-dropdown type="primary" placement="top-start" class="lang">
          <span class="el-dropdown-link" type="primary">
            {{ t('common.lang') }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="switchLang('zh-CN')">简体中文</el-dropdown-item>
              <el-dropdown-item @click="switchLang('en-US')">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <button class="cta" @click="handleButtonClick">
			<span class="hover-underline-animation"> 
        <Ticker
          :value="price"
          :duration="800"
          easing="easeInOut"
          :char-width="1"
          :character-lists="['0123456789.,']"
        />
			</span>
			<svg
				id="arrow-horizontal"
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="10"
				viewBox="0 0 46 16"
			>
				<path
				id="Path_10"
				data-name="Path 10"
				d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
				transform="translate(30)"
				></path>
			</svg>
        </button>

        <div v-if="isLogin">
          <el-dropdown
            
            trigger="click"
            placement="bottom" 
            @command="handleDropdownCommand"  
          >
            <el-avatar
              class="mr-3 avatar"
              :size="32"
              :src="userInfo.avatar"
              style="cursor: pointer;"  
            />
            <template #dropdown>
              <el-dropdown-menu class="dropdown-menu">
                <el-dropdown-item command="my" @click="$router.push(`/self`)">个人中心</el-dropdown-item>
                <el-dropdown-item divided command="logout" @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
            </el-dropdown>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.avatar {
	margin-right: 20px;
  object-fit: cover;
  transition: all 0.2s ease;
  // 在该元素上显示鼠标指针cursor
  cursor: pointer; 

  transition: all 0.2s ease; 
  box-shadow: 0 2px 8px color-mix(in srgb, var(--text-primary) 50%, transparent);

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 4px 12px color-mix(in srgb, var(--text-primary) 100%, transparent);; 
  }

  // active激活时或者点击时
  &:active {
    transform: scale(0.95); // 缩小到0.95倍
    box-shadow: 0 2px 4px color-mix(in srgb, var(--text-primary) 10%, transparent); // 阴影变浅
  }
}


.right-header-left{
  flex: 6;
  width: 70;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-header{
    display: flex;
    align-items: center;
    height: 54px;
    width: 100%;

	.theme{
		flex: 1;
	}

	.search {
		flex: 4;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.lang{
		flex: 1;
	}
}


.right-header-right{
    margin-right: 20px;
    flex:1;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
}

.switch {
  font-size: 0.9em;
  position: relative;
  display: inline-block;
  width: 4em;
  height: 2.2em;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2a2a2a;
  transition: 0.4s;
  border-radius: 30px;
  overflow: hidden;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.2em;
  width: 1.2em;
  border-radius: 20px;
  left: 0.5em;
  bottom: 0.5em;
  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.81, -0.04, 0.38, 1.5);
  box-shadow: inset 8px -4px 0px 0px #fff;
}

.switch input:checked + .slider {
  background-color: #00a6ff;
}

.switch input:checked + .slider:before {
  transform: translateX(1.8em);
  box-shadow: inset 15px -4px 0px 15px #ffcf48;
}

.star {
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  width: 5px;
  transition: all 0.4s;
  height: 5px;
}

.star_1 {
  left: 2.5em;
  top: 0.5em;
}

.star_2 {
  left: 2.2em;
  top: 1.2em;
}

.star_3 {
  left: 3em;
  top: 0.9em;
}

.switch input:checked ~ .slider .star {
  opacity: 0;
}

.cloud {
  width: 3.5em;
  position: absolute;
  bottom: -1.4em;
  left: -1.1em;
  opacity: 0;
  transition: all 0.4s;
}

.switch input:checked ~ .slider .cloud {
  opacity: 1;
}



.search__input {
  font-family: inherit;
  font-size: inherit;
  background-color: var(--bg-tertiary);
  border: none;
  color: var(--text-primary);
  width: 32em;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
}

.search__input:hover, .search__input:focus {
  box-shadow: 0 0 1em #00000013;
}

.search__input:focus {
  outline: none;
  background-color: var(--bg-secondary);
}

.search__input::-webkit-input-placeholder {
  font-weight: 100;
  color: var(--text-primary)
}

.search__input:focus + .search__button {
  background-color: rgba(0,0,0,0);
}

.search__button {
  border: none;
  background-color: rgba(0,0,0,0);
  margin-top: .1em;
}

.search__button:hover {
  cursor: pointer;
}

.search__icon {
  height: 1.3em;
  width: 1.3em;
  fill: var(--text-secondary);
}


.cta {
	margin-right: 20px;
  border: none;
  background: none;
  cursor: pointer;
}

.cta span {
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 14px;
  padding-right: 15px;
  text-transform: uppercase;
}

.cta svg {
  transform: translateX(-7px);
  transition: all 0.3s ease;
  path{
    fill: var(--text-primary);
  }
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active svg {
  transform: scale(0.8);
}

.hover-underline-animation {
  position: relative;
  color: var(--text-primary);
  padding-bottom: 20px;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--text-primary);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (max-width :768px){
  .search{
    transform:scale(0.8);
  }
}

</style>
