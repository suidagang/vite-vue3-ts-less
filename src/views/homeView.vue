<template>
	<div class="box">
		<span>我是路由首页{{ test }}</span>
		<suiTest v-show="flag" @close="flag = false" />
		<gang v-show="!flag" @close-gang="flag = true" />
		<!-- <el-button type="primary">Primary</el-button> -->
	</div>
</template>

<script setup lang="ts">
// import suiTest from '@/components/suiTest.vue';
// import gang from '@/components/gang.vue';
import { tst } from './test';
const test = ref<number>(0);
const flag = ref<boolean>(false);
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
