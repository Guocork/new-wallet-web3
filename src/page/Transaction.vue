<script setup>
import Button from '../components/Button.vue'
import AccountList from '../components/AccountList.vue'
import { ref, onMounted } from 'vue';
import store from 'store2';

const walletInfo = ref([]);

onMounted(() => {
  walletInfo.value = store.get("walletInfo") || [];
});

</script>

<template>
<Button></Button>
<AccountList :walletInfo="walletInfo"></AccountList>
</template>

<style scoped>

</style>