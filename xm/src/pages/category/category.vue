<template>
  <div>
    <el-button type="primary" @click="add()">添加</el-button>
    <v-add :info="info"></v-add>
  </div>
</template>

<script>
import vAdd from "./components/add";
export default {
  data() {
    return {
      info: {
        show: true,
        title: "",
        isAdd: true,
      },
    };
  },
  methods: {
    add() {
      this.info.show = true;
      this.info.title = "添加商品";
      this.info.isAdd = false;
    },
  },
  components: {
    vAdd,
  },
};
</script>

<style>
</style>