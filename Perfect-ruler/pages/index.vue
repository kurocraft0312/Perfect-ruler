<template>
<!-- 最初にページを構成して、コンポーネント分けする -->
  <el-container>
    <el-header>
      <h1>Perfect-ruler</h1>
    </el-header>
    <el-main>
      <div v-for="question in questions" :key="question.key">
        <label for="question-content">{{ question.title }}</label>
          <el-input type="textarea" :rows="10" placeholder="" v-model="textarea"></el-input>
      </div>
    </el-main>
    <el-footer>
      <div class="copyright"> © 2019 Ratpost by Kurokawa Shun</div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          title: '質問項目1'
        },
        {
          title: '質問項目2'
        },
        {
          title: '質問項目3'
        },
        {
          title: '質問項目4'
        },
        {
          title: '質問項目5'
        },
        {
          title: '質問項目6'
        },
        {
          title: '質問項目7'
        },
        {
          title: '質問項目8'
        },
        {
          title: '質問項目9'
        },
        {
          title: '質問項目10'
        },
      ],
      textarea: '',
    }
  }
}
</script>

<style>

</style>
