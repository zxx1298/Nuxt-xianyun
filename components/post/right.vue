<template>
  <div class="div">
    <div class="input" style="border:3px solid #ffa500;height:36px">
      <el-input v-model="input" placeholder="请输入想去的地方，比如：'广州'" class="input"></el-input>
      <i class="el-icon-search tu_biao"></i>
    </div>
    <div class="recommend">
      推荐：
      <span>广州</span>
      <span>广州</span>
      <span>广州</span>
    </div>
    <div class="strategy">
      <div class="gong_lue">推荐攻略</div>
      <div>
        <el-button type="primary">写游记</el-button>
      </div>
    </div>
    <div>
      <div class="article_1">
        <h3>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h3>
        <p>大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。1.怎样订机票+酒店性价比最高？机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</p>
        <el-row :gutter="20" class="el_row">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <img
                src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                alt
              />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <img
                src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                alt
              />
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="content_bottom">
          <el-col :span="22" class="left_1">
            <i class="el-icon-location-outline"></i>by
            <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" />
            <span>地球发动机</span>
            <i class="el-icon-view"></i>12805
          </el-col>
          <el-col :span="2" class="right_1">111</el-col>
        </el-row>
      </div>
      <div class="article_2">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple bg-purple-1">
              <img
                src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                alt
              />
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple bg-purple-2">
              <h3>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h3>
              <p>大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。1.怎样订机票+酒店性价比最高？机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。</p>
              <el-row type="flex" class="content_bottom">
                <el-col :span="22" class="left_1">
                  <i class="el-icon-location-outline"></i>by
                  <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" />
                  <span>地球发动机</span>
                  <i class="el-icon-view"></i>12805
                </el-col>
                <el-col :span="2" class="right_1">111</el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      data: {}
    };
  },
  mounted() {
    this.$axios({
      url: "/posts"
    }).then(res => {
      console.log(res);
      this.data = res.data.data;
    });
  }
};
</script>

<style lang='less' scoped>
.tu_biao {
  font-size: 24px;
  color: #ffa500;
  position: relative;
  top: 5px;
}

/deep/.el-input__inner {
  border: none;
  width: 100%;
  height: 36px;
}
/deep/ .el-input {
  width: 95%;
}
.recommend {
  font-size: 14px;
  padding: 10px 0;
  span {
    margin: 0 5px 0 0;
  }
}
//推荐攻略
.strategy {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  align-items: center;
  padding-bottom: 10px;
  .gong_lue {
    font-size: 18px;
    color: #ffab10;
    // line-height: 51px;
    // padding:
  }
}
.article_1 {
  padding: 20px 0;
  h3 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
    &:hover {
      color: #ffa500;
    }
  }
  p {
    font-size: 14px;
    color: #666666;
    height: 63px;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.5;
  }
  .el_row {
    margin: 15px 0;
  }
  img {
    width: 220px;
    height: 150px;
  }
}
.content_bottom {
  margin: 15px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
  .left_1 {
    font-size: 12px;
    color: #999999;
    img {
      width: 16px;
      height: 16px;
      span {
        color: #ffa500;
      }
    }
  }
  .right_1 {
    font-size: 16px;
    color: #ffa500;
  }
}
.article_2 {
  .bg-purple-1 {
    width: 220px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bg-purple-2 {
    h3 {
      font-weight: 400;
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
      color: #666666;
      height: 63px;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 1.5;
      margin-bottom: 15px;
    }
  }
}
</style>