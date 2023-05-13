<template>
  <div class="page">
    <div class="page-header">
      <el-button @click="print">打印图表</el-button>
    </div>
    <div id="PieLegend"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
import axios from "axios";

import html2canvas from "html2canvas";
var ROOT_PATH = "https://echarts.apache.org/examples";

export default {
  mounted() {
    this.initRender();
  },
  methods: {
    print() {
      html2canvas(document.getElementById("PieLegend"))
        .then((canvas) => {
          document.body.appendChild(canvas);
          this.$message.success("打印图表成功");
        })
        .catch(() => {
          this.$message.error("打印图表失败");
        });
    },
    initRender() {
      var chartDom = document.getElementById("PieLegend");
      var myChart = echarts.init(chartDom);
      var option;

      var uploadedDataURL = ROOT_PATH + "/data-gl/asset/data/flights.json";
      myChart.showLoading();
      axios.get(uploadedDataURL).then((data) => {
        myChart.hideLoading();
        function getAirportCoord(idx) {
          return [data.airports[idx][3], data.airports[idx][4]];
        }
        var routes = data.routes.map(function (airline) {
          return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
        });
        myChart.setOption({
          geo3D: {
            map: "world",
            shading: "realistic",
            silent: true,
            environment: "#333",
            realisticMaterial: {
              roughness: 0.8,
              metalness: 0,
            },
            postEffect: {
              enable: true,
            },
            groundPlane: {
              show: false,
            },
            light: {
              main: {
                intensity: 1,
                alpha: 30,
              },
              ambient: {
                intensity: 0,
              },
            },
            viewControl: {
              distance: 70,
              alpha: 89,
              panMouseButton: "left",
              rotateMouseButton: "right",
            },
            itemStyle: {
              color: "#000",
            },
            regionHeight: 0.5,
          },
          series: [
            {
              type: "lines3D",
              coordinateSystem: "geo3D",
              effect: {
                show: true,
                trailWidth: 1,
                trailOpacity: 0.5,
                trailLength: 0.2,
                constantSpeed: 5,
              },
              blendMode: "lighter",
              lineStyle: {
                width: 0.2,
                opacity: 0.05,
              },
              data: routes,
            },
          ],
        });
        window.addEventListener("keydown", function () {
          myChart.dispatchAction({
            type: "lines3DToggleEffect",
            seriesIndex: 0,
          });
        });
      });

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100vw;
  min-height: 100vh;

  & #PieLegend {
    width: 100vw;
    height: 100vh;
  }
}
</style>
