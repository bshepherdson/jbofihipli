<template>
  <div class="home">
    <h1>jbofi'ipli - Lojban authorship tool</h1>
    <Editor />
    <input v-model="lojban" placeholder="Lojban!" />
    <Parser :text="lojban" />
  </div>
</template>
<script>
import Editor from '@/components/Editor.vue';
import Parser from '@/components/Parser.vue';

export default {
  name: 'Home',
  data() {
    return {
      lojban: '',
    };
  },
  components: {
    Editor,
    Parser,
  },
};
</script>
