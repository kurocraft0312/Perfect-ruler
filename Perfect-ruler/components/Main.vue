<template>
  <el-main>
    <section v-for="question in questions" :key="question.key">
      <div class="q-title">
        <label for="question-content">{{ question.title }}</label>
      </div>
        <el-input type="textarea" class="textbox" :rows="10" v-model="textarea"></el-input>
    </section>
    <div class="create">
      <el-button type="primary" id="sentence-generation">文章を生成</el-button>
    </div>
    <div>
      <!-- 自動出力用のテキストエリア -->
      <el-input type="textarea" :rows="30" v-model="textarea"></el-input>
    </div>
    <!-- 自動出力用のテキストエリアの内容を全選択してコピーする -->
    <div class="copy">
      <el-button type="primary">コピー</el-button>
    </div>
  </el-main>
</template>
<style>
  .el-main {
    margin: 0 auto;
    width: 80%;
  }
  .q-title {
    font-weight: bold;
    margin: 16px 0;
  }
  .create {
    margin: 24px 0;
    text-align: center;
  }
  .copy {
    margin: 24px 0;
    text-align: center;
  }
</style>
<script>
export default {
  data() {
    return {
      questions: [
        {
          title: 'Q1.いつやってほしい/やるべきことか？'
        },
        {
          title: 'Q2.誰がやりたい/やるべきことか？'
        },
        {
          title: 'Q3.なぜ/何のためにやるのか？'
        },
        {
          title: 'Q4.やるとどうなる/どう変わるのか？'
        },
      ],
      textarea: '',
    }
  }
}
</script>
