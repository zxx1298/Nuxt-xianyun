<template>
  <div class="left">
    <div class="nav" @mouseleave="handleleave">
      <div
        class="kuang_1"
        v-for="(item,index) in data"
        :key="index"
        @mouseenter="handleenter(index)"
      >
        <span>{{item.type}}</span>
        <i class="el-icon-arrow-right jian"></i>
      </div>
      <div class="yin_can" v-if="data[tabs]">
        <nuxt-link to="#" v-for="(item,index) in data[tabs].children" :key="index">
          <div class="shu_0">
            <em class="shu_1">{{index+1}}</em>
            <span class="shu_2">{{item.city}}</span>
            <span class="shu_3">{{item.desc}}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="recommend">
      <h3 style="margin-top:20px;">推荐城市</h3>
      <div style="width:270px;">
        <img
          src="http://157.122.54.189:9093/images/pic_sea.jpeg"
          alt
          style="width: 100%; height:100%;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      tabs: ""
    };
  },
  methods: {
    handleenter(index) {
      this.tabs = index;
    },
    handleleave(index) {
      this.tabs = "";
    }
  }
};
</script>

<style lang='less' scoped>
.nav {
  width: 270px;
  //   height: 200px;
  border: 1px solid #ddd;
  position: relative;

  .kuang_1 {
    display: flex;
    z-index: 111;
    justify-content: space-between;
    line-height: 40px;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    &:hover {
      color: #ffa502;
    }
    .jian {
      line-height: 40px;
    }
  }
  .yin_can {
    z-index: 999;
    width: 350px;
    height: 182px;
    padding: 10px 20px;
    position: absolute;
    border: 1px solid #ccc;
    left: 270px;
    top: 0;
    background-color: #fff;
    .shu_0 {
      height: 36px;
    }
    .shu_1 {
      font-size: 24px;
      color: #ffa500;
    }
    .shu_2 {
      margin: 0 10px;
      line-height: 36px;
      font-weight: 400;
      font-size: 14px;
      color: #ffa500;
      &:hover {
        text-decoration: underline;
      }
    }
    .shu_3 {
      line-height: 36px;
      font-size: 14px;
      color: #999;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .recommend {
 
    width: 270px;
    h3 {
          margin-top: 20px;
      margin: 10px 0;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>