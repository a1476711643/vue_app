<template>
  <div class="newsInfo-container">
    <!-- 标题 -->
    <h3 class="newsTitle">{{ newsInfo.title }}</h3>
    <p class="newsInfo">
      <span
        >发布时间:{{
          newsInfo.add_time | dataFormat("YYYY年MM月DD日hh时mm分ss秒")
        }}</span
      >
      <span>点击:{{ newsInfo.click }}</span>
    </p>
    <hr />
    <div class="newsContent" v-html="newsInfo.content"></div>

    <comment :id="this.id"></comment>
  </div>
</template>

<script>
import NewsComment from './NewsComment.vue';
export default {
  data() {
    return {
      // 获取地址值上传的id
      id: this.$route.params.id,
      // 评论页码
      page:1,
      newsInfo: [],
    };
  },
  created() {
    //获取新闻信息
    this.getNewsInfo();
    //获取新闻评论信息
  },
  methods: {
    //获取新闻信息
    async getNewsInfo() {
      const { data: res } = await this.$http.get("getnew/" + this.id);
    //   console.log(res);
      if (res.status != 0) {
        this.$toast('获取数据失败')
        return;
      } else {
        this.newsInfo = res.message[0];
      }
    },
  },
    components:{
        "comment":NewsComment
    }
};
</script>

<style lang="scss" scoped>
.newsInfo-container {
  padding: 5px;
}

.newsTitle {
  color: red;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}

.newsInfo {
  color: #26a2ff;
  display: flex;
  justify-content: space-between;
}


</style>