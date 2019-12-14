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
    //https://jp.vuejs.org/v2/guide/components-edge-cases.html#%E5%86%8D%E5%B8%B0%E7%9A%84%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88
    Main: () => import('~/components/Main.vue'),
    Footer
  },
}
</script>
