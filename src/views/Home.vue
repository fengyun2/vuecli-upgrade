<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <IForm />
    <PieLegend />
    <Lines3d />
    <Amap />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import IForm from "@/components/Form.vue";
import PieLegend from "@/components/PieLegend.vue";
import Lines3d from "../components/Lines3d.vue";
import Amap from "@/components/Amap.vue";

export default {
  name: "home",
  components: {
    // HelloWorld,
    IForm,
    PieLegend,
    Lines3d,
    Amap
  }
};
</script>
