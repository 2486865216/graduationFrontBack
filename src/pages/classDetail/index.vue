<template>
  <div class="back">
    <t-icon class="back_icon" name="arrow-left" size="30px" @click="back">返回</t-icon>
  </div>
</template>

<script lang="ts">
export default {
  name: "ClassDetail"
}
</script>

<script lang="ts" setup>
import {useRouter} from "vue-router";
const router = useRouter();
const back = () => {
  router.back();
}
</script>

<style scoped lang="less">
.back{
  .back_icon{
    margin: 10px;
  }
  .back_icon:hover{
    cursor: pointer;
  }
}
</style>