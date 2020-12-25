<template>
  <div class="comment">
    <h4 class="sendComment">发表评论</h4>
    <hr />
    <textarea
      placeholder="自由bb(最多吐槽120个字)"
      v-model="message"
    ></textarea>
    <mt-button type="primary" @click="sendComment()">发表评论</mt-button>
    <div v-for="(item1, index) in commentInfo" :key="index">
      <div class="comment-Info">
        第{{ index }}楼 用户:{{ item1.user_name }} 发表时间:{{
          item1.add_time | dataFormat("YYYY-MM-DD hh:mm:ss")
        }}
        <p class="comment-News">{{ item1.content }}</p>
      </div>
    </div>
    <mt-button type="danger" plain @click="loadMore()">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagenum: 1,
      commentInfo: [],
      message: "",
    };
  },
  created() {
    this.getNewsComment();
  },
  methods: {
    //获取评论信息
    async getNewsComment() {
    //   console.log(
    //     "请求地址:" +"getcomments/" +parseInt(this.id) +"?pageindex=" +this.pagenum
    //   );
      const { data: res } = await this.$http.get(
        "getcomments/" + this.id + "?pageindex=" + this.pagenum
      );
      //   console.log("评论的返回结果：" + res); 鸟用没有 就出个object
      if (res.status != 0) {
        this.$toast("获取评论信息失败！");
        return;
      } else {
        // this.commentInfo = res.message;
        this.commentInfo = this.commentInfo.concat(res.message)
        console.log(this.commentInfo);
      }
    },
    async sendComment() {
      // console.log(this.CommentInfo);
      const { data: res } = await this.$http.post("postcomment/" + this.id, {
        content: this.message,
      });
      if (res.status != 0) {
        this.$toast("提交评论失败");
        return;
      } else {
        this.$toast(res.message);
        //刷新评论
        this.getNewsComment();
      }
      // console.log(res);
    },
    loadMore(){
        this.pagenum++;
        this.getNewsComment();
        
    }
  },

  props: ["id"],
};
</script>

<style lang="scss" scoped>
.sendComment {
  margin-top: 20px;
}

textarea::-webkit-input-placeholder {
  font-size: 13px; // 文本域的提示字体大小
}

.comment button {
  width: 100%; //撑满
  margin-bottom: 8px;
}

.comment-Info {
  line-height: 30px;
  color: black;
  font-size: 14px;
  background-color: #ccc;
  margin: 0; //清除掉自带的margin 10px
}

.comment-Info .comment-News {
  background-color: #fff;
  color: 000;
  margin: 5px 0;
}
</style>