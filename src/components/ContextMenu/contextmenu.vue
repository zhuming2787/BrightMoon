<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
	menuItems: { type: Array, default: () => [] }, // [{label:'编辑', value:'edit'}]
	targetSelector: { type: String, required: true }, // 绑定右键的元素选择器
});

const visible = ref(false);
const x = ref(0);
const y = ref(0);

const openMenu = e => {
	e.preventDefault();
	// 自动防止超出屏幕
	const menuWidth = 150;
	const menuHeight = props.menuItems.length * 36;
	x.value = Math.min(e.clientX, window.innerWidth - menuWidth);
	y.value = Math.min(e.clientY, window.innerHeight - menuHeight);
	visible.value = true;
};

const handleClickOutside = () => {
	visible.value = false;
};

const handleClick = item => {
	item?.callback?.();
	visible.value = false;
};

onMounted(() => {
	const target = document.querySelector(props.targetSelector);
	if (target) {
		target.addEventListener('contextmenu', openMenu);
	}

	// 增加事件
	document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
	const target = document.querySelector(props.targetSelector);
	if (target) {
		target.removeEventListener('contextmenu', openMenu);
	}
	document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
	<div v-if="visible" class="context-menu" :style="{ top: `${y}px`, left: `${x}px` }" @contextmenu.prevent>
		<ul>
			<li v-for="(item, index) in menuItems" :key="index" @click="handleClick(item)">
				{{ item.label }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.context-menu {
	position: fixed;
	background: var(--bg-primary);
	border: 1px solid var(--bg-primary);
	min-width: 150px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	z-index: 1000;
}
.context-menu ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
.context-menu li {
	padding: 8px 12px;
	cursor: pointer;
	user-select: none;
}
.context-menu li:hover {
	background: var(--bg-tertiary);
}
</style>
