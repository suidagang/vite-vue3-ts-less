<template>
	<div class="test-sui">
		测试眭刚
		<button @click="close()">关闭</button>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);
const close = () => {
	emit('close');
};
</script>

<style lang="less" scoped>
@baseColor: #ff0000;

.test-sui {
	color: @baseColor;
}
</style>
