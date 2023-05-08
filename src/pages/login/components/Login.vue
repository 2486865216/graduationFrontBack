<template>
  <t-form
    ref="form"
    :class="['item-container', `login-password`]"
    :data="formData"
    :rules="FORM_RULES"
    label-width="0"
    @submit="loginForm"
  >
    <template v-if="true">
      <t-form-item name="account">
        <t-input v-model="formData.username" size="large" placeholder="请输入账号">
          <template #prefix-icon>
            <t-icon name="user" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="password">
        <t-input
          v-model="formData.password"
          size="large"
          :type="showPsw ? 'text' : 'password'"
          clearable
          placeholder="请输入登录密码"
        >
          <template #prefix-icon>
            <t-icon name="lock-on" />
          </template>
          <template #suffix-icon>
            <t-icon :name="showPsw ? 'browse' : 'browse-off'" @click="showPsw = !showPsw" />
          </template>
        </t-input>
      </t-form-item>
    </template>

    <t-form-item v-if="type !== 'qrcode'" class="btn-container">
      <t-button block size="large" type="submit"> 登录 </t-button>
    </t-form-item>
  </t-form>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import type {FormInstanceFunctions, FormRule, SubmitContext} from 'tdesign-vue-next';
import {MessagePlugin} from "tdesign-vue-next";
import {login, loginData} from "@/request/loginRequest";
import router from "@/router/router";

const FORM_RULES: Record<string, FormRule[]> = {
  username: [{ required: true, message: '账号必填', type: 'error' }],
  password: [{ required: true, message: '密码必填', type: 'error' }],
};

const type = ref('password');

const loginData = {
  username: '',
  password: ''
};

const form = ref<FormInstanceFunctions>();
const formData = reactive<loginData>({...loginData});
const showPsw = ref(false);


const loginForm = (context: SubmitContext) => {
  login(formData).then(res => {
    if (res.code === 200) {
      localStorage.setItem("token", res.data);
      MessagePlugin.info("登录成功!")
      router.replace("/")
    } else {
      MessagePlugin.error(res.msg)
    }
  }).catch(err => {
    MessagePlugin.error("登录失败!")
    console.log(err)
  })
}

</script>

<style lang="less" scoped>
@import url('../index.less');
</style>
