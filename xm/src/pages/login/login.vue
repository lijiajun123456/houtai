<template>
  <div class="box">
    <div class="login">
      <h3>登录</h3>
      <el-input placeholder="请输入用户名" v-model="user.username"></el-input>
      <el-input placeholder="请输入密码" type="password" v-model="user.password"></el-input>
      <el-button type="primary" @click="login()">登录</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { requestLogin } from "../../utils/request";
import { successAlert, warningAlert } from "../../utils/alert";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      requestUser: "userActions",
    }),
    login() {
      //方式二:存储到vuex和sessionStorage
      requestLogin(this.user).then((res) => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          //将用户信息存入到store,
          this.requestUser(res.data.list);
          this.$router.push("/");
        } else {
          warningAlert(res.data.msg);
        }
      });

      // 方式1
      // requestLogin(this.user).then((res) => {
      //   if (res.data.code == 200) {
      //     successAlert(res.data.msg);
      //     if (localStorage.getItem("user") !== null) {
      //       localStorage.removeItem("user");
      //     }

      //     localStorage.setItem("user", JSON.stringify(res.data.list));
      //     this.$router.push("/");
      //   } else {
      //     warningAlert(res.data.msg);
      //   }
      // });
    },
  },
};
</script>

<style socped>
.box {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgb(155, 55, 156), #ccc);
}
.login {
  width: 400px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px #ccc solid;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
}
.login h3 {
  font-size: 30px;
}
.login input {
  margin: 20px 0;
}
.el-button {
  width: 300px;
}
</style>