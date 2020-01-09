<template>
  <div class="index"> 
   
<left class="left" :data='user'/>
 <right class="right"/>

     
   <!-- <el-row>
  <el-col :span="7"><div class="grid-content bg-purple"> </div></el-col>
  <el-col :span="17"><div class="grid-content bg-purple-light"> </div></el-col>
</el-row> -->
  </div>
</template>

<script>
import left from '@/components/post/left'
import right from '@/components/post/right'
export default {
components:{left,right},
data () {
  return {
    user:{
      type:'',
      city:'',
      desc:''
    }  
  }
},
 mounted(){
   this.$axios({
     url:'/posts/cities',
   }).then(res=>{
     console.log(res)
     this.user = res.data.data
   })
 }
}
</script>

<style  lang="less">
  .index{
    width: 1000px;
    margin:0 auto; 
    display: flex;
    margin-top: 20px;
  }
.left{
  width: 270px;
}
.right{
  flex: 1;
  width: 630px;
  padding-left: 20px;
}
</style>