<template>
<!-- 最初にページを構成して、コンポーネント分けする -->
  <el-container>
    <Header />
      <Main />
    <Footer />
  </el-container>
</template>

<script>
import Header from '~/components/Header.vue'
import Main from '~/components/Main.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Main,
    Footer
  },
}
</script>
