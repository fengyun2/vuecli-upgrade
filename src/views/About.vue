<template>
  <div class="about">
    <p class="title">这是首页</p>
    <IForm />
    <PieLegend />
    <Amap />
  </div>
</template>
<script>
import IForm from "@/components/Form.vue";
import PieLegend from "@/components/PieLegend.vue";
import Amap from "@/components/Amap.vue";

export default {
  name: "home",
  components: {
    IForm,
    PieLegend,
    Amap
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-size: $--font-size-large;
  color: $--color-primary;
}
</style>
