<template>
  <div style="padding:200px">
    <script
      type="text/javascript"
      src="https://webapi.amap.com/maps?v=1.4.15&key=357e31f1015fa20395778d909d36346d"
    ></script>
    <div id="container"></div>
  </div>
</template>


<script>
export default {
  mounted() {
    var map = new AMap.Map("container", {
      zoom: 11, //级别
      center: [113.4278180000,23.1293300000], //中心点坐标
      viewMode: "3D" ,//使用3D视图  
    });
     var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
    });
    map.add(trafficLayer);//添加图层到地图
  }
};
</script>

<style leng='less'>
#container {
  width: 500px;
  height: 500px;
}
#container {
  width: 500px;
  height: 500px;
}
</style>