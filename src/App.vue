<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
const num = ref<number>(1);
num.value = '123';
</script>

<style>
.app-box {
	color: #ccc;
}
</style>
