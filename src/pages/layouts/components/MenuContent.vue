<template>
  <div class="menu">
    <t-menu
        theme="dark"
        :default-value="menuList[0].value"
        height="550px"
        v-model:value="menuValue"
        @change="menuChange"
    >
      <template #logo>
        <img style="margin: auto" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo"/>
      </template>

      <t-menu-item v-for="item in menuList" :value="item.value">
        <template #icon>
          <t-icon :name="item.icon_name"/>
        </template>
        {{ item.name }}
      </t-menu-item>
    </t-menu>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import {MenuValue} from "tdesign-vue-next";
import router from "@/router/router";

const menuValue = ref("/allChoose")

const menuList = [
  {
    value: "/allChoose",
    icon_name: "root-list",
    name: "全部选课"
  },
  {
    value: "/myChoose",
    icon_name: "user",
    name: "我的选课"
  },
  {
    value: "/teachersManager",
    icon_name: "user",
    name: "教师管理"
  },
  {
    value: "/studentsManager",
    icon_name: "user",
    name: "学生管理"
  },
  {
    value: "/departmentManager",
    icon_name: "user",
    name: "院系管理",
  },
  {
    value: "/professionalManagement",
    icon_name: "user",
    name: "专业管理",
  },
  {
    value: "/curriculumManagement",
    icon_name: "user",
    name: "课程管理",
  },
]

const menuChange = (active: MenuValue) => {
  router.push(active as string)
}
</script>

<style lang="less" scoped>
.menu {
  height: 100vh
}
</style>
