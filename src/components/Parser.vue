<template>
  <div class="parser">
    <h3>Parser</h3>
    <div>{{text}}</div>
    <div v-if="parsed.error">{{parsed.error}}</div>
    <div v-if="parsed.tree">{{parsed.tree}}</div>
    <ParseBox v-if="parsed.tree" :tree="parsed.tree" :depth="1" />
  </div>
</template>
<script lang="ts">
import {computed, defineComponent} from '@vue/composition-api';
import {parseLojban} from '@/parse';
import ParseBox from '@/components/ParseBox.vue';

export default defineComponent({
  props: {
    text: String,
  },
  components: {ParseBox},
  setup(props) {
    const parsed = computed(() => {
      if (!props?.text) {
        return {};
      }
      try {
        const tree = parseLojban(props.text);
        return {tree};
      } catch (e) {
        return {error: e};
      }
    });

    return {parsed};
  },
});
</script>
