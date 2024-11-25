<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
const num = ref<number>(1);
num.value = 123;
const b: string = '1111'; // 新增
const c = 234;
num.value = Number(b) + c;
// console.log(num, b, c);
// console.log(import.meta.env, '--00');
</script>

<style>
.app-box {
	color: #ccc;
}
</style>
