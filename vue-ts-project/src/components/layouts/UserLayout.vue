<template>
  <section class="default-layout">
    <UserHeader />
    <RouterView />
  </section>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterView } from 'vue-router'
import UserHeader from '../headers/UserHeader.vue'

export default {
  name: 'UserLayout',
  components: {
    UserHeader,
  },
}
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
