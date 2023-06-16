<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
const num = ref<number>(1);
num.value = 123;
const b: number = '111'; // 新增
console.log(num, b);
</script>

<style>
.app-box {
	color: #ccc;
}
</style>
