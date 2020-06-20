<template>
  <div class="home">
    <h1>jbofi'ipli - Lojban authorship tool</h1>
    <input v-model="lojban" placeholder="Lojban!" />
    <Parser :text="lojban" />
  </div>
</template>
<script>
import Parser from '@/components/Parser.vue';

export default {
  name: 'Home',
  data() {
    return {
      lojban: '',
    };
  },
  components: {
    Parser,
  },
};
</script>
