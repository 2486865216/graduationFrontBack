<template>
  <div class="info">
    <t-dropdown :min-column-width="135" trigger="click">
      <template #dropdown>
        <t-dropdown-menu>
          <t-dropdown-item class="operations-dropdown-container-item">
            <t-icon name="user-circle"></t-icon>个人中心
          </t-dropdown-item>
          <t-dropdown-item @click="poweroff" class="operations-dropdown-container-item">
            <t-icon name="poweroff"></t-icon>退出登录
          </t-dropdown-item>
        </t-dropdown-menu>
      </template>
      <t-button class="header-user-btn" theme="default" variant="text">
        <template #icon>
          <t-icon class="header-user-avatar" name="user-circle" />
        </template>
        <div class="header-user-account">Tencent</div>
        <template #suffix><t-icon name="chevron-down" /></template>
      </t-button>
    </t-dropdown>
  </div>
</template>

<script setup lang="ts">
import router from "@/router/router";

const poweroff = () => {
  router.replace("/login")
  localStorage.removeItem("token")
}
</script>
<style lang="less" scoped>
.info {
  position: relative;
  display: flex;
  justify-content: right;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
