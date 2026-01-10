<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref, shallowReactive, shallowRef } from 'vue';
const router = useRouter();
import { contentList } from '@/mock/contentList';
import Draggable from 'vuedraggable';
// 获取数据（后期修改为后端的数据）

const intoContent = content => {
	// 判断是什么类型？如果获得的contentList中显示了什么，那就进入什么？
	switch (content.type) {
		case 'article':
			return router.push(`content/article/${content.id}`);
		case 'pixel':
			return router.push(`content/pixel/${content.id}`);
		case 'image':
			return router.push(`content/image/${content.id}`);
	}
	router.push(`/content/${content.id}`);
};

const contentListbody = shallowReactive(contentList.slice(0, 6));
const start = ref(6);
const load = () => {
	// 每次更新,获取六个新数据,然后添加到contentListbody后面(这里是模拟)
	contentListbody.push(...contentList.slice(start.value, start.value + 6));
	start.value += 6;
};

/**
 * 判断内容为 article | pixel | image?,从而加载不同的meta
 * @param content 抽象内容块
 */
const formatMeta = content => {
	switch (content.type) {
		case 'article':
			return content.meta?.category_name;
		case 'pixel':
			return `${content.payload.width} x ${content.payload.height}`;
		case 'image':
			return content.payload.size;
		default:
			return '';
	}
};

// 抽离卡片的媒体展示
import ImagePreview from './media/ImagePreview.vue';
import PixelPreview from './media/PixelPreview.vue';
import ArticlePreview from './media/ArticlePreview.vue';

/**
 * 媒体映射: 不同样式展示不同的media
 */
const mediaMap = {
	image: ImagePreview,
	pixel: PixelPreview,
	article: ArticlePreview,
};

const loading = ref(true);
// 模拟接口加载数据,使用骨架屏
onMounted(async () => {
	await new Promise(resolve => setTimeout(resolve, 500));
	loading.value = false;
});
</script>

<template>
	<Draggable
		v-model="contentListbody"
		item-key="id"
		v-infinite-scroll="load"
		tag="ul"
		class="container"
		:animation="200"
		:key="retryKey"
	>
		<template #item="{ element }">
			<li>
				<Card
					:loading="loading"
					:type="element.type"
					:title="element.title || '无标题'"
					:meta="formatMeta(element)"
					@click="intoContent(element)"
				>
					<template #media>
						<component :is="mediaMap[element.type] || mediaMap.default" :content="element" />
					</template>
				</Card>
			</li>
		</template>
	</Draggable>
</template>

<style lang="scss" scoped>
.container {
	// 列表样式:常用来去掉前面的点
	list-style: none;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: center;
	box-sizing: border-box;

	li {
		width: 300px;
		height: fit-content;
	}
}
</style>
