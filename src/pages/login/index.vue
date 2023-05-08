<template>
  <div class="light login-wrapper">
    <div class="login-container">
      <div class="title-container">
        <h1 class="title margin-no">登录到</h1>
        <h1 class="title">选课系统</h1>
      </div>

      <login />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LoginIndex',
};
</script>
<script setup lang="ts">
import { ref } from 'vue';

import Login from './components/Login.vue';

const type = ref('login');
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
