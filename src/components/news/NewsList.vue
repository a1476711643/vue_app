<template>
  <div>
    <!-- 新闻布局 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsMessage" :key="item.id">
        <router-link :to="'newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.add_time | dataFormat('YYYY-MM-DD')}}</span>
            <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsMessage: [],
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
        // 处理异步
      const { data: res } = await this.$http.get("getnewslist");
      if(res.status != 0) return;
      this.newsMessage = res.message;
      console.log(this.newsMessage);
    },
  },
};
</script>

<style lang="scss" scoped>
.mui-media-body {
  h1 {
    font-size: 14px;
  }
}
.mui-ellipsis {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #26a2ff;
}
</style>