<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
const num = ref<number>(1);
num.value = 123;
// const b: string = '111'; // 新增
console.log(num);
</script>

<style>
.app-box {
	color: #ccc;
}
</style>
