# Convert Vuex Module to Pinia (TypeScript)

This document provides a step-by-step template to convert a Vuex module to a Pinia store with TypeScript.

1. Identify the Vuex module file, e.g. `src/store/modules/example.js`.
2. Create a new Pinia store at `src/stores/example.ts`.

Example conversion pattern:

```ts
// Vuex module (example)
// state: { count: 0 }
// mutations: { inc(state) { state.count++ } }
// actions: { async fetch() { ... } }
// getters: { double: (state) => state.count * 2 }

// Pinia store (TypeScript)
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useExampleStore = defineStore('example', () => {
  const count = ref(0);
  function inc() { count.value++; }
  async function fetchData() { /* ... */ }
  const double = computed(() => count.value * 2);

  return { count, inc, fetchData, double };
});
```

Notes:
- Migrate mutations -> functions, actions -> functions (async allowed), getters -> computed.
- Store should avoid keeping non-serializable objects (like three renderer); keep those in composables.
- Register persisted plugin in `src/main.ts` if you need persistence.
