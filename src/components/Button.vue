<script setup>
import { ref } from "vue";
// import {  showDialog, Dialog } from "vant";

const show = ref(false);
const VanDialog = Dialog.Component;
const creatwallet = () => {
  show.value = true;
  console.log(show.value);
  showDialog({ message: '提示' });
};
</script>

<template>
  <van-space>
    <van-button type="primary" @click="creatwallet">创建钱包</van-button>
    <van-button type="primary">导入钱包</van-button>

    <van-dialog v-model:show="show" title="标题" show-cancel-button>
      <b>hhh</b>
    </van-dialog>
  </van-space>
</template>

<style scoped></style>
