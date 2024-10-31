import { ref, onMounted, onUnmounted } from 'vue';

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const isIntersecting = ref(false);
  const hasIntersected = ref(false);
  const element = ref<HTMLElement | null>(null);

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !hasIntersected.value) {
      isIntersecting.value = true;
      hasIntersected.value = true;
    }
  }, options);

  onMounted(() => {
    if (element.value) {
      observer.observe(element.value);
    }
  });

  onUnmounted(() => {
    if (element.value) {
      observer.unobserve(element.value);
    }
  });

  return { isIntersecting, element };
}
