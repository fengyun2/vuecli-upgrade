<template>
  <el-form class="form" ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker
          placeholder="选择时间"
          v-model="form.date2"
          style="width: 100%"
        ></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="视频介绍">
      <Player />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import moment from "moment";
import { cloneDeep } from "lodash";
import axios from "axios";
import Player from "./Player";
// import { JSONEditor } from "vanilla-jsoneditor";
export default {
  components: { Player },
  data() {
    return {
      editor: null,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      // const content = { text: "[1,2,3]" };
      // const editor = new JSONEditor({
      //   target: document.getElementById("jsoneditor"),
      //   props: {
      //     content,
      //     onChange: (
      //       updatedContent,
      //       previousContent,
      //       { contentErrors, patchResult }
      //     ) => {
      //       // content is an object { json: JSONValue } | { text: string }
      //       console.log("onChange", {
      //         updatedContent,
      //         previousContent,
      //         contentErrors,
      //         patchResult
      //       });
      //     }
      //   }
      // });
      // this.editor = editor;
    },
    onSubmit() {
      // console.log("submit!");
      const formData = cloneDeep(this.form);
      formData.date1 = formData.date1
        ? moment(formData.date1).format("YYYY/MM/DD HH:mm:ss")
        : "";
      formData.date2 = formData.date2
        ? moment(formData.date2).format("YYYY/MM/DD HH:mm:ss")
        : "";

      axios
        .post("http://localhost:3000/save", formData)
        .then(() => {
          this.$message.success("保存成功");
        })
        .catch(() => {
          this.$message.error("保存失败");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 460px;
}
</style>
