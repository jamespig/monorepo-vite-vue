<template>
  <el-button class="bg-red-500" type="primary">{{ text }}</el-button>
</template>
<script setup>
import { ElButton } from 'element-plus'

defineProps({
  text: {
    type: String,
    default: 'Click You',
  },
})
</script>
<style scoped></style>