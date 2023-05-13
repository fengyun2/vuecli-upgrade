<template>
  <div class="amap-wrapper">
    <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "vue-amap向你问好！",
    };
  },
};
</script>

<style>
.amap-wrapper {
  width: 500px;
  height: 500px;
}
</style>
