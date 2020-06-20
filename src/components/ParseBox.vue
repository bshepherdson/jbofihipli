<template>
  <div v-if="node" class="labeled-box">
    <div class="box"
         :class="classObj">
      <ParseBox v-for="t in innerTree"
                :key="JSON.stringify(t)"
                :depth="depth + 1"
                :tree="t" />
      <div class="node-label">{{node}}</div>
    </div>
  </div>
  <div v-else-if="Array.isArray(tree)"
       class="box" :class="classObj">
    <ParseBox v-for="t in innerTree"
              :key="JSON.stringify(t)"
              :depth="depth + 1"
              :tree="t" />
  </div>
  <span v-else-if="typeof tree === 'string'"
      class="text">
    {{tree}}
  </span>
</template>
<script lang="ts">
import {computed, defineComponent} from '@vue/composition-api';

export default defineComponent({
  props: ['tree', 'depth'],
  name: 'ParseBox',
  setup(props) {
    const classObj = computed(() => {
      const modulo = props.depth % 6 + 1;
      const name = `depth-${modulo}`;
      return {[name]: true};
    });

    const node = computed(() => {
      if (!Array.isArray(props.tree)) return null;
      const first = props.tree[0];
      if (Array.isArray(first)) return null;
      const colon = first.indexOf(':');
      // If there's no colon, or it's at the end, we treat this as a label under
      // the nested box.
      if (colon < 0 || colon === first.length - 1) {
        return first;
      }
      return null;
    });

    const innerTree = computed(() => {
      if (!Array.isArray(props.tree)) return props.tree;
      return node.value ? props.tree.slice(1) : props.tree;
    });

    return {classObj, innerTree, node};
  },
});
</script>
<style scoped lang="scss">
.box {
  border: 1px solid black;
  display: inline-block;
  margin: 4px;
  padding: 4px;
}

.labeled-box {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
}

.node-label {
  font-size: 80%;
  margin: 4px 0;
  opacity: 78%;
}

.depth-1 {
  background-color: #fcc;
}
.depth-2 {
  background-color: #cfc;
}
.depth-3 {
  background-color: #ccf;
}
.depth-4 {
  background-color: #eea;
}
.depth-5 {
  background-color: #dad;
}
.depth-6 {
  background-color: #add;
}
</style>
