<template>
	<div class="box">
		<span>我是路由首页{{ test }}</span>
		<suiTest />
		<!-- <el-button type="primary">Primary</el-button> -->
	</div>
</template>

<script setup lang="ts">
import suiTest from '@/components/suiTest.vue';
import { tst } from './test';
const test = ref<number>(0);
const bb: number = 123;
test.value = bb;
// console.log(bb);

tst();
</script>

<style lang="less" scoped>
.box {
	text-align: left;
}
</style>
