<script setup>
import HomePage from './page/HomePage.vue'
import Transaction from "./page/Transaction.vue";
import Mine from "./page/Mine.vue";
import { ref, onMounted } from 'vue';

const active = ref(0);
    const icon = [
    {
      active: 'gem',
      inactive:
        'gem-o',
    },
    {
      active: 'gold-coin',
      inactive:
        'gold-coin-o',
    },
    {
      active: 'contact',
      inactive:
        'contact-o',
    }
    ];

</script>

<template>
<van-tabbar v-model="active">
  <van-tabbar-item>
    <span>首页</span>
    <template #icon="props">
      <van-icon :name="props.active ? icon[0].active : icon[0].inactive" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="gold-coin-o" @click="">
    <span>交易</span>
    <template #icon="props">
      <van-icon :name="props.active ? icon[1].active : icon[1].inactive" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="contact-o">
    <span>我的</span>
    <template #icon="props">
      <van-icon :name="props.active ? icon[2].active : icon[2].inactive" />
    </template>
  </van-tabbar-item>
</van-tabbar>
</template>

<style lang="less">
body {
  padding: 10px;
}
</style>