<template>
  <div class="about">
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
    Amap,
  },
};
</script>
