<template>
	<div>刚<button @click="close()">关闭刚</button></div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close-gang']);
const close = () => {
	emit('close-gang');
};
</script>

<!-- <style scoped></style> -->
