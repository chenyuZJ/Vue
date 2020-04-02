<template>
  <div id="app">
    <transition
      mode="out-in"
      :duration="{ enter: 200, leave: 200 }"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view></router-view>
    </transition>
    <homebom></homebom>
  </div>
</template>

<script>
import homebom from "./components/home/homebom.vue";
export default {
  components: {
    homebom
  }
};
</script>

<style lang="scss" scoped>
div {
  overflow: hidden;
}
</style>