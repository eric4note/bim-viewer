import { onMounted, onUnmounted, ref, Ref } from 'vue';
import * as THREE from 'three';

export function useThree(containerRef: Ref<HTMLElement | null>) {
  const renderer = ref<THREE.WebGLRenderer | null>(null);
  const scene = ref<THREE.Scene | null>(null);
  const camera = ref<THREE.PerspectiveCamera | null>(null);

  onMounted(() => {
    if (!containerRef.value) return;
    const width = containerRef.value.clientWidth;
    const height = containerRef.value.clientHeight;

    const r = new THREE.WebGLRenderer({ antialias: true });
    r.setSize(width, height);
    containerRef.value.appendChild(r.domElement);

    const s = new THREE.Scene();
    const c = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    c.position.set(0, 2, 5);

    renderer.value = r;
    scene.value = s;
    camera.value = c;

    const animate = () => {
      r.render(s, c);
      requestAnimationFrame(animate);
    };
    animate();
  });

  onUnmounted(() => {
    if (renderer.value) {
      renderer.value.dispose();
      const el = renderer.value.domElement;
      if (el && el.parentNode) el.parentNode.removeChild(el);
    }
    renderer.value = null;
    scene.value = null;
    camera.value = null;
  });

  return { renderer, scene, camera };
}
