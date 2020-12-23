<template>
  <el-dialog :title="info.title" :visible.sync="info.show">
    <el-form :model="form">
      <el-form-item label="角色名称" :label-width="formLabelWidth">
        <el-input v-model="form.rolename"></el-input>
      </el-form-item>
      <el-form-item label="角色权限" :label-width="formLabelWidth">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-checked-keys="defaultKey"
          :props="defaultProps"
          ref="tree"
        ></el-tree>
      </el-form-item>
      <el-form-item label="角色状态" :label-width="formLabelWidth">
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { successAlert, warningAlert } from "../../../utils/alert";
import {
  requestAddRole,
  requestRoleOne,
  requestUpdateRole,
} from "../../../utils/request";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      data: "menu/list",
    }),
  },
  data() {
    return {
      form: {
        rolename: "",
        menus: "",
        status: 1,
      },
      defaultProps: {
        children: "children",
        label: "title",
      },
      formLabelWidth: "80px",
      defaultKey: [],
    };
  },
  methods: {
    ...mapActions({
      requestMenuList: "menu/listActions",
      requestRoleList: "role/listActions",
    }),
    cancel() {
      this.info.show = false;
      this.form = {
        rolename: "",
        menus: "",
        status: 1,
      };
      this.defaultKey = this.$refs.tree.setCheckedKeys([]);
    },
    confirm() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      console.log(this.$refs.tree.getCheckedKeys());
      requestAddRole(this.form).then((res) => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.cancel();
          this.requestRoleList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },

    getDetail(id) {
      requestRoleOne({ id: id }).then((res) => {
        if (res.data.code == 200) {
          // console.log(JSON.parse(res.data.list.menus));
          this.form = res.data.list;
          this.form.id = id;
          this.defaultKey = JSON.parse(res.data.list.menus);
        }
      });
    },
    update() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      requestUpdateRole(this.form).then((res) => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.cancel();
          this.requestRoleList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
  },
  mounted() {
    //自定义的函数名
    this.requestMenuList();
  },
};
</script>

<style>
</style>