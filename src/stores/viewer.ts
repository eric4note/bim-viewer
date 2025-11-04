import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useViewerStore = defineStore('viewer', () => {
  const modelUrl = ref<string | null>(null);
  const isLoading = ref(false);
  const cameraState = ref({ x: 0, y: 0, z: 0 });

  function setModel(url: string) { modelUrl.value = url; }
  function setLoading(v: boolean) { isLoading.value = v; }
  function setCamera(x: number, y: number, z: number) { cameraState.value = { x, y, z }; }

  return { modelUrl, isLoading, cameraState, setModel, setLoading, setCamera };
});