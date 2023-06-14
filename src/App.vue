<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const num = ref<number>(1);
num.value = '123';
</script>

<style scoped></style>
