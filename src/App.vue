<template>
<h1>Hello World</h1>
<van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  欢迎来到我的钱包
</van-button>
<!-- <Suspense>
  <Web3Api></Web3Api>
</Suspense> -->
<AccountSys></AccountSys>
</template>

<script setup>
import Web3 from 'web3';
import Web3Api from './components/Web3Api.vue';
import AccountSys from './components/AccountSys.vue';
//实例化web3
var web3 = new Web3(Web3.givenProvider || "wss://goerli.infura.io/ws/v3/0fda17b26c574dca81d0069f6150ffe8");
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: red;
}
</style>
