<template>
  <div class="main">
    <t-base-table
        :bordered="false"
        hover
        row-key="index"
        :columns="tableHead"
        :data="tableData"
        :fixedRows="[0, 2]"
        max-height="100%"
        table-layout="auto"
    >
      <template #operation = {row} >
        <t-button theme="success" @click="chooseClass(row)">选课</t-button>
        &nbsp
        <t-button theme="primary" @click="detail">详情</t-button>
      </template>
    </t-base-table>

    <t-dialog v-model:visible="visible">
      <p style="text-align: center">确定选择该门课程吗？</p>
    </t-dialog>
  </div>
</template>

<script lang="ts">
export default {
  name: "AllChoose"
}
</script>

<script lang="ts" setup>
import {ref} from "vue"
import router from "@/router/router";
import {commonGet, commonPost} from "@/request/commonRequest";

const visible = ref(false)

const tableHead = [
  {
    colKey: "xueyuan",
    title: "院系",
    align: "center"
  },
  {
    colKey: "name",
    title: "课程名称",
    align: "center"
  },
  {
    colKey: "code",
    title: "课程编码",
    // 浮层浅色背景，方向默认朝下出现
    ellipsis: {
      theme: 'light',
      placement: 'bottom',
    },
    align: "center"
  },
  {
    colKey: "operation",
    title: "操作",
    align: "center",
  }
];
const tableData = [
  {
    index: 1,
    xueyuan: "测试",
    code: "Hello World",
    name: "Java"
  },
];
const getData = () => {
  for (let i = 0; i < 50; i++) {
    tableData.push({
      index: i + 1,
      xueyuan: "测试",
      code: "Hello World",
      name: "Java"
    })
  }
}
getData();

const getAllData = () => {
  commonGet("/department/list").then(res => {
    console.log(res)
  })
}
getAllData()
const chooseClass = (row: number) => {
  console.log(row)
  visible.value = true;
  console.log(visible)
}

const detail = () => {
  router.push("/classDetail")
}

</script>

<style scoped>
.main {
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.t-table {
  height: 100%;
}
</style>