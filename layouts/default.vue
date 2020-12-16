<template>
  <div>
    <div class="page">
      <Menu />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
export default {
  components: { Menu, Footer }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: calc(100vh - 50px);
  margin-bottom: 20px;
}
</style>
