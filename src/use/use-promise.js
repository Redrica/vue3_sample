import { ref } from 'vue';

export default function usePromise (func) {
  const results = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const createPromise = async (...args) => {
    loading.value = true;
    error.value = null;
    results.value = null;

    try {
      results.value = await func(...args);
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  return { results, loading, error, createPromise };
}
