<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="上级分类" :label-width="formLabelWidth">
          <el-select v-model="form.pid">
            <el-option label="--请选择--" value disabled></el-option>
            <el-option label="顶级分类" :value="0"></el-option>
            <!-- 动态数据获取 -->
            <el-option v-for="item in list" :key="item.id" :label="item.catename" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.catename"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <!-- elementui的文件上传  -->
          <!-- <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
           :on-change="changeImg">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>-->

          <div class="box-img">
            <h3>+</h3>
            <img v-if="imageUrl" :src="imageUrl" alt />
            <input type="file" @change="changeImg1" />
          </div>
        </el-form-item>
        <el-form-item label="分类状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="blue"
            inactive-color="grey"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="confirm" v-if="info.isAdd">确 定</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { requestAddCategory } from "../../../utils/request";
export default {
  props: ["info"],
  data() {
    return {
      imageUrl: "",
      form: {
        pid: 0,
        catename: "",
        img: "",
        status: 1,
      },
      formLabelWidth: "80px",
    };
  },
  methods: {
    cancel() {
      this.info.show = false;
    },
    confirm() {
      requestAddCategory(this.form).then((res) => {});
    },
  },
};
</script>

<style>
</style>