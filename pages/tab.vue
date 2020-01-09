<template>
  <div class="div">
    <div class="header">
      <span v-for="(item,index) in user" :key="index" @click="userTab(index)">{{item}}</span>
    </div>
    <div v-if="current===0">
      <ul>
        <li>普通新闻1</li>
        <li>普通新闻2</li>
        <li>普通新闻3</li>
      </ul>
    </div>
    <div v-if="current===1" >
      <ul>
        <li>体育新闻1</li>
        <li>体育新闻2</li>
        <li>体育新闻3</li>
      </ul>
    </div>
    <div v-if="current===2" >
      <ul>
        <li>娱乐新闻1</li>
        <li>娱乐新闻2</li>
        <li>娱乐新闻3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ["新闻", "体育", "娱乐"],
      current:0
    };
  },
  methods: {
    userTab(index) {
        this.current = index
        
    }
  }
};
</script>

<style lang='less' scoped>
.header {
 span {
    padding-right: 20px;
  }
}
.a{
 display: none
}

 
</style>