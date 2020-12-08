<template>
  <div>
      <!-- mint-ui header 显示头部信息 里面可嵌套mt-button -->
      <mt-header fixed title="Vue项目">
          <mt-button router-link="'/'" icon="back" slot="left" v-show="flag" @click="goBack">返回</mt-button>
      </mt-header>
      <!-- 中间内容路由占坑区域 -->
      <router-view></router-view>
      <h1>123</h1>
      <!-- 底部导航区 -->

      <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item mui-active" to="/home">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class='mui-tab-item' to="/member">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link class='mui-tab-item' to="/shop">
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class='mui-tab-item' to="/search">
      <span class="mui-icon mui-icon-search"></span>
      <span class="mui-tab-label">搜索</span>
    </router-link>
  </nav>

  </div>
</template>

<script>
  export default {
      data() {
          return {
              flag: true,
          }
      },
      created() {

      },
      methods: {
          // 点击返回的事件
          goBack() {
              this.$router.go(-1);
          }
      },
      watch: {
          //页面刷新 不会触发watch的监听路由的变化
          // 返回按钮是否显示

          // 监听$route.path路径变化
          "$route.path": function (newVal, oldVal) {
              if (newVal === '/home') {
                  this.flag = !this.flag;
              } else {
                  this.flag = !this.flag
              }
          }
      },
      mounted() { //设置在mounted是因为这时候正好是dom元素渲染出来的时候
          //将背景颜色设置成白色
          document.getElementsByTagName("body")[0].style = "background-color:white";
      },
  }
</script>

<style lang="scss" scoped>
.mint-header {
  z-index: 99;
}

.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  background-color: white;
}

.mui-bar-tab .my-tab-item {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .my-tab-item.mui-active {
  color: #007aff;
}


.mui-bar-tab .my-tab-item .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .my-tab-item .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>