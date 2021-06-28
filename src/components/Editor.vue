<template>
  <codemirror v-model="code" />
</template>
<script lang="ts">
import {defineComponent, ref, watch} from '@vue/composition-api';
import 'codemirror/lib/codemirror.css';
import {codemirror} from 'vue-codemirror';

console.log(codemirror);
export default defineComponent({
  components: {codemirror},
  setup() {
    const code = ref('');

    watch(code, (c) => {
      const phrases = c.split(/\bi\b|(?:(?:niho|ni'o)\s*)+/);
      console.log('text changed', phrases);
    });

    return {code};
  },
});
</script>
