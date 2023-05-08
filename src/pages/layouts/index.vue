<template>
  <div>
    <t-layout key="side">
      <t-aside>
        <SideNav />
      </t-aside>
      <t-layout>
        <t-header>
          <Header />
        </t-header>
        <t-content class = "tdesign-starter-layout">
          <Content />
        </t-content>
      </t-layout>
    </t-layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "index"
}
</script>

<script setup lang="ts">
import Header from "@/pages/layouts/components/Header.vue";
import SideNav from "@/pages/layouts/components/SideNav.vue";
import Content from "@/pages/layouts/components/Content.vue";

</script>

<style lang="less" scoped>
.t-layout__header{
  height: 8vh;
}
.t-layout__content{
  height: 92vh;
}
</style>
