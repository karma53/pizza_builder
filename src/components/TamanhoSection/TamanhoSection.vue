<template>
  <div id="tamanhoSection" class="container">
    <div class="inputs">
      <div v-for="t in tamanhos" class="input" :key="t.tamanho">
        <input
          type="radio"
          name="tamanhos"
          :value="t.tamanho"
          :id="t.tamanho"
          v-model="tamanho"
        />
        <label :for="t.tamanho"
          ><span>{{ t.tamanho }}</span></label
        >
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "TamanhoSection",
  props: ["tamanhos"],
  computed: {
    tamanho: {
      get() {
        return store.getters.getTamanho;
      },
      set(val) {
        
        store.commit("escolherTamanho", val);
      },
    },
  },

};
</script>
<style lang="scss" scoped>
@import "./TamanhoSection.scss";
</style>
