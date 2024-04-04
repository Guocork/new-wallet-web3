<script setup>
import { ref, defineProps, computed } from "vue";
const props = defineProps(["walletInfo"]);
import Web3 from "web3";
import { showSuccessToast,showFailToast } from "vant";
import ethwallet, { hdkey } from "ethereumjs-wallet";

var web3 = new Web3(
  Web3.givenProvider ||
    "wss://goerli.infura.io/ws/v3/0fda17b26c574dca81d0069f6150ffe8"
);
const show = ref(false);
const password = ref("");
const keystore = ref("");
const verifyPwd = ref("");
const showBottom = ref(false);
const toAddress = ref("");
const showloading = ref(false);

const walletInfoAddressFilter = computed(() => {
  props.walletInfo.forEach(async (item, index) => {
    const originalAddress = item.address;
    const head = item.address.slice(0, 8);
    const tail = item.address.slice(item.address.length - 8);
    item.address = head + "..." + tail;
    //根据地址获取账户余额
    // const result = await web3.eth.getBalance(originalAddress);
    // item.balance = web3.utils.fromWei(result, "ether");
  });
  return props.walletInfo;
});

const transaction = (Keystore, pass) => {
  console.log(555);
  setTimeout(() => {
    showloading.value = false;
    showSuccessToast('交易成功');
  },2000);
  
};

const getPassword = (keyStore, pwd) => {
  show.value = true;
  keystore.value = keyStore;
  verifyPwd.value = pwd;
};

const confirmPassword = () => {
  if (password.value == verifyPwd.value) {
    showBottom.value = true;
    transaction(keystore.value, password.value);
  } else {
    showFailToast("密码错误");
  }
  password.value = "";
  verifyPwd.value = "";
};

const confirmSend = () => {
  showloading.value = true;
  showBottom.value = false;
};
</script>

<template>
  <div>
    <van-cell
      :title="item.address"
      icon="location"
      v-for="item in walletInfoAddressFilter"
    >
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-button
          size="small"
          class="btn"
          @click="getPassword(item.keyStore, item.password)"
          >{{ item.balance }}</van-button
        >
      </template>
    </van-cell>
  </div>
  
  <van-dialog
    v-model:show="show"
    title="验证密码"
    show-cancel-button
    @confirm="confirmPassword"
  >
    <van-cell-group inset>
      <van-field
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        type="password"
      />
    </van-cell-group>
  </van-dialog>
  <van-popup
    v-model:show="showBottom"
    position="bottom"
    :style="{ height: '30%' }"
  >
    <div class="container"><p class="sign">发送到</p></div>
    <van-field v-model="toAddress" label="地址" placeholder="请输入发送地址" />
    <div class="container"></div>
    <div class="container2">
      <van-button type="primary" class="btn2" @click="confirmSend"
        >确认发送</van-button
      >
    </div>
  </van-popup>
  <van-overlay :show="showloading" z-index="100">
    <div class="wrapper">
      <van-loading type="spinner" />
    </div>
  </van-overlay>
</template>

<style lang="less" scoped>
.btn {
  width: 80px;
}
.container {
  margin-top: 20px;
  margin-bottom: 20px;
}
.sign {
  text-align: center;
  font-weight: bold;
}
.btn2 {
  width: 200px;
}
.container2 {
  text-align: center;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

</style>
