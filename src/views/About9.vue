<template>
  <div class="about">
    <IForm />
    <PieLegend />
  </div>
</template>
<script>
import IForm from "@/components/Form.vue";
import PieLegend from "@/components/PieLegend.vue";

export default {
  name: "home",
  components: {
    IForm,
    PieLegend
  }
};
</script>
