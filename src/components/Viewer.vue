<template>
  <div ref="container" class="w-full h-full bg-black"></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useThree } from '@/composables/useThree';
import { useViewerStore } from '@/stores/viewer';

const container = ref<HTMLElement | null>(null);
const { renderer, scene, camera } = useThree(container);
const store = useViewerStore();

watch(() => store.modelUrl, (url) => {
  if (!url) return;
  // Load model with three loaders here, e.g. GLTFLoader
  // Example placeholder: console.log('load', url)
});
</script>

<style scoped>
.container { width: 100%; height: 100%; }
</style>
