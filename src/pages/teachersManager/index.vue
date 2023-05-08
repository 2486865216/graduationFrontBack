<template>
  <div class="head">
    <t-row align="center" :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
      ]">
      <t-col
          :xs="{ offset: 0, span: 3 }"
          :sm="{ offset: 2, span: 3 }"
          :md="{ offset: 4, span: 3 }"
          :lg="{ offset: 6, span: 3 }"
          :xl="{ offset: 8, span: 3 }"
      >
        <t-select-input
            :value="selectValue"
            :popup-visible="popupVisible"
            :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
            placeholder="Please Select"
            borderless
            clearable
            @popup-visible-change="onPopupVisibleChange"
            @clear="onClear"
        >
          <template #panel>
            <ul class="tdesign-demo__select-input-ul-borderless">
              <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
                {{ item.label }}
              </li>
            </ul>
          </template>
        </t-select-input>
      </t-col>
    </t-row>
  </div>
</template>

<script lang="ts">
export default {
  name: "teachersManager"
}
</script>

<script lang="ts" setup>
import {ref} from 'vue';

const options = [
  {label: 'tdesign-vue', value: 1},
  {label: 'tdesign-react', value: 2},
  {label: 'tdesign-miniprogram', value: 3},
  {label: 'tdesign-angular', value: 4},
  {label: 'tdesign-mobile-vue', value: 5},
  {label: 'tdesign-mobile-react', value: 6},
];

const selectValue = ref({label: 'tdesign-vue', value: 1});

const popupVisible = ref(false);

const onOptionClick = (item) => {
  selectValue.value = item;
  popupVisible.value = false;
};

const onClear = () => {
  selectValue.value = {label: '', value: -1};
};

const onPopupVisibleChange = (val) => {
  popupVisible.value = val;
};
</script>

<style scoped lang="less">
.head {
  width: 100%;
}
.tdesign-demo__select-input-ul-borderless {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__select-input-ul-borderless > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-borderless > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>