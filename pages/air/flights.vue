<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <flightsFilters :data='cacheFlightsData' 
        @setDataList='setDataList'/>

        <!-- 航班头部布局 -->
        <flightsListHead />

        <!-- 航班信息 -->
        <flightsItem v-for="(item,index) in dataList" :key="index" :data="item" />
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>

      <!-- 侧边栏 -->
      <flightsAside />
    </el-row>
  </section>
</template>

<script>
import moment from "moment";
import flightsListHead from "@/components/air/flightsListHead";
import flightsItem from "@/components/air/flightsItem";
import flightsFilters from "@/components/air/flightsFilters";
import flightsAside from "@/components/air/flightsAside";

export default {
  components: {
    flightsListHead,
    flightsItem,
    flightsAside,
    flightsFilters
  },
  data() {
    return {
      flightsData: {
          info:{},
          options: {},
           flights: []
      },
      cacheFlightsData:{
           info:{},
          options: {},
           flights: []
      },
        //  dataList:[],
      pageIndex: 1,
      pageSize: 5,
      total: 0
    };
  },
  computed: {
    dataList() {
      if (!this.flightsData.flights) return [];
      return this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    }
  },
  methods: {
      setDataList(arr){
          this.flightsData.flights = arr
          this.total = this.flightsData.total
      },
    //获取航班总数据
    getData() {
      this.$axios({
        url: `airs`,
        params: this.$route.query
      }).then(res => {
        //   console.log(res)
        this.flightsData = res.data;
        // console.log(this.flightsData);
        this.cacheFlightsData ={...res.data}
        console.log(this.cacheFlightsData)
        this.total = this.flightsData.total;
      });
    },
    // setDataList(arr){
    //     consolo.log(arr)
    // },
    handleList() {},
    //切换每一页条数时触发
    handleSizeChange(value) {
      console.log(value);
      this.pageSize = value;
    },
    //切换每页数时触发
    handleCurrentChange(value) {
      console.log(value);
      this.pageIndex = value;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>