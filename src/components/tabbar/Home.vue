<template>
  <div>
      <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotu" :key="item.id">
          <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格区域 -->
    		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../assets/images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/picshare">
		                    <img src="../../assets/images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/buygoods">
		                    <img src="../../assets/images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/leavemessage">
		                    <img src="../../assets/images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/video">
		                    <img src="../../assets/images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/callus">
		                    <img src="../../assets/images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul>
		</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbotu: [
        {
          id: "1",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608291846206&di=31c4867c46e999adb9466ee19325a78f&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcomic%2Fpics%2Fhv1%2F58%2F84%2F2199%2F143011453.jpg",
        },
        {
          id: "2",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605353077526&di=cf8249158c8b867467f43a7c360b0d7e&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F55fbd60aa3581.jpg",
        },
        {
          id: "3",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605353148596&di=77d69f781761785d1c7659edf4f2e475&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1520821609%2C4097703303%26fm%3D214%26gp%3D0.jpg",
        },
      ], //轮播图数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {},
  },
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  // .mint-swipe-item:nth-child(1) {
  //   background-color: red;
  // }
  // .mint-swipe-item:nth-child(2) {
  //   background-color: red;
  // }
  // .mint-swipe-item:nth-child(3) {
  //   background-color: red;
  // }

  img {
      width: 100%;
      height: 100%;
  }
}

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border:none;
}
.mui-content {
    img {
        width: 60px;
        height: 60px;
    }
}
</style>