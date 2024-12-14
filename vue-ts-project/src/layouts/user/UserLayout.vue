<template>
  <div>
    <UserHeader />
    <RouterView />
    <FooterView />
  </div>
</template>

<script lang="ts">
import UserHeader from '@/components/UserHeader.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  components: {
    UserHeader,
    FooterView,
  },
}
</script>
