<template>
	<div class="box">
		<span>我是路由首页</span>
		<suiTest />
		<el-button type="primary">Primary</el-button>
	</div>
</template>

<script setup lang="ts">
import suiTest from '@/components/suiTest';
import { tst } from './test';

tst();
</script>

<style lang="less" scoped>
.box {
	text-align: left;
}
</style>
