<template>
  <div class="page">
    <div class="page-header">
      <el-button @click="print">打印图表</el-button>
    </div>
    <div id="PieLegend"></div>
    <div v-for="item in comps" :key="item">
      <Lines3d />
      <Amap />
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import html2canvas from "html2canvas";
import Lines3d from "./Lines3d";
import Amap from "./Amap";
import HelloWorld from "./HelloWorld";
export default {
  components: { Lines3d, Amap, HelloWorld },
  data() {
    return {
      comps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
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

      const data = genData(50);
      option = {
        title: {
          text: "同名数量统计",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: data.legendData,
        },
        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: data.seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      function genData(count) {
        // prettier-ignore
        const nameList = [
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
    ];
        const legendData = [];
        const seriesData = [];
        for (var i = 0; i < count; i++) {
          var name =
            Math.random() > 0.65
              ? makeWord(4, 1) + "·" + makeWord(3, 0)
              : makeWord(2, 1);
          legendData.push(name);
          seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000),
          });
        }
        return {
          legendData: legendData,
          seriesData: seriesData,
        };
        function makeWord(max, min) {
          const nameLen = Math.ceil(Math.random() * max + min);
          const name = [];
          for (var i = 0; i < nameLen; i++) {
            name.push(
              nameList[Math.round(Math.random() * nameList.length - 1)]
            );
          }
          return name.join("");
        }
      }

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
