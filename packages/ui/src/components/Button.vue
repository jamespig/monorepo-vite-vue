<template>
  <el-button type="primary">{{ text }}</el-button>
</template>
<script setup>
import { ElButton } from 'element-plus'

defineProps({
  text: {
    type: String,
    default: 'Click me',
  },
})
</script>
<style scoped></style>