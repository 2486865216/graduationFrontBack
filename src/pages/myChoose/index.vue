<template>
  <div class="main">
    <t-base-table
        bordered
        hover
        row-key="index"
        :columns="tableHead"
        :data="tableData"
        :fixedRows="[0, 0]"
        max-height="100%"
    >
      <template #operation = {row}>
        <t-button theme="danger" @click="cancelChooseClass(row)">退选</t-button>
        &nbsp
        <t-button theme="primary" @click="detail">详情</t-button>
      </template>
    </t-base-table>

    <t-dialog v-model:visible="visible">
      <p style="text-align: center">确定退选该门课程吗？</p>
    </t-dialog>
  </div>
</template>

<script lang="ts">
  export default {
    name: "MyChoose"
  }
</script>

<script lang="ts" setup>
import {ref} from "vue"
import {useRouter} from 'vue-router';

const router = useRouter()

const visible = ref(false)

const tableHead = [
  {
    colKey: "index",
    title: "序号",
    align: "center"
  },
  {
    colKey: "xueyuan",
    title: "开课学院",
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
    colKey: "name",
    title: "课程名称",
    align: "center"
  },
  {
    colKey: "operation",
    title: "操作",
    align: "center"
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

const cancelChooseClass = (row: number) => {
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