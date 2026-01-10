<script setup>
import { user } from '@/store';
import { computed, onMounted, ref } from 'vue';
const userStore = user();
const userInfo = computed(() => userStore.getUserInfo || {});
const viewerVisible = ref(false);
const avatar = ref('https://api.elaina.cat/random/');

onMounted(() => {
	avatar.value = userInfo.value.avatar;
});

const handleUpload = file => {
	// 将头像上传,并且修改用户的头像
	console.log(file);
};
</script>

<template>
	<div class="common-layout">
		<el-container class="container">
			<el-main class="left">
				<el-avatar class="mr-3" :size="128" @click="viewerVisible = true" :src="avatar" />
				<!-- 图片检查器组件，使用了Teleport -->
				<AvatarViewer v-model="viewerVisible" :src="avatar" @upload="handleUpload" />

				<div class="TheInfo">
					<div class="TheInfoTop">
						<p class="username">
							{{ userInfo.username
							}}<svg
								t="1765968467687"
								class="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="5363"
								width="32"
								height="32"
							>
								<path d="M79.36 916.48h343.04v51.2H79.36z" fill="#2c2c2c" p-id="5364"></path>
								<path d="M550.4 916.48h376.32v51.2H550.4z" fill="#2c2c2c" p-id="5365"></path>
								<path
									d="M629.76 158.72l215.04 215.04L373.76 844.8l-215.04-215.04L629.76 158.72z m0 0"
									fill="#2c2c2c"
									p-id="5366"
									data-spm-anchor-id="a313x.search_index.0.i1.13d83a813aREov"
									class="selected"
								></path>
								<path
									d="M716.8 74.24l215.04 215.04-64 64-215.04-215.04L716.8 74.24z m0 0"
									fill="#2c2c2c"
									p-id="5367"
								></path>
								<path
									d="M138.24 652.8l215.04 215.04L51.2 952.32l87.04-299.52z m0 0"
									fill="#2c2c2c"
									p-id="5368"
								></path>
								<path
									d="M798.72 71.68L931.84 204.8c23.04 23.04 20.48 58.88-2.56 81.92-23.04 23.04-61.44 25.6-81.92 2.56l-133.12-133.12c-23.04-20.48-23.04-58.88 2.56-81.92 23.04-23.04 58.88-25.6 81.92-2.56z m0 0"
									fill="#2c2c2c"
									p-id="5369"
								></path>
							</svg>
						</p>
					</div>
					<div class="TheInfoBottom">
						<el-button type="info" link
							>关注
							<p class="number">11</p>
						</el-button>
						<el-divider direction="vertical" />
						<el-button type="info" link
							>粉丝
							<p class="number">6</p>
						</el-button>
						<el-divider direction="vertical" />
						<el-button type="info" link
							>获赞
							<p class="number">0</p>
						</el-button>
					</div>
				</div>
			</el-main>
			<el-main class="right"></el-main>
		</el-container>
	</div>
</template>

<style lang="scss" scoped>
.TheInfoTop {
	height: 50px;
}

.username {
	font-size: x-large;
	font-weight: bold;
}

.number {
	margin-left: 6px;
	color: black;
	font-size: large;
}
.icon {
	height: 16px;
}
.icon:hover {
	cursor: pointer;
}

.common-layout {
	display: flex;
}
.left {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: start;
}

.TheInfo {
	margin-left: 14px;
	display: flex;
	flex-direction: column;
}

.right {
	flex: 1;
}
.common-layout {
	height: 100%;
}
</style>
