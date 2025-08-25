<template>
  <div>
    <el-button :class="buttonClasses" :type="buttonType" :size="size" :disabled="disabled" :link="variant === 'link'"
      :text="variant === 'plain'">

      <div v-if="slots.left" class="icon-base icon-left">
        <slot name="left"></slot>
      </div>

      {{ text }}

      <div v-if="slots.right" class="icon-base icon-right">
        <slot name="right"></slot>
      </div>

    </el-button>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus'
import { computed, useSlots } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Button',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'link', 'plain'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const slots = useSlots();

const buttonType = computed(() => {
  if (props.variant === 'primary') return 'primary'
  if (props.variant === 'plain') return 'primary'
  if (props.variant === 'link') return 'link'
  return 'default'
})

const buttonClasses = computed(() => {
  const classes = []

  // 基礎樣式 - 根據變體調整
  if (props.variant === 'link') {
    classes.push('text-sm tracking-[0.56px] border-none bg-transparent')
  } else if (props.variant === 'plain') {
    classes.push('min-w-[82px] h-9 px-3 py-2 text-sm leading-5 tracking-[0.56px] rounded-md border-none bg-transparent')
  } else {
    classes.push('min-w-[82px] h-9 px-3 py-2 text-sm leading-5 tracking-[0.56px] border-0')
  }

  // 變體樣式
  const variantClasses = {
    'primary': 'bg-blue-800 border-blue-800 text-white hover:bg-blue-900 hover:border-blue-900 active:bg-blue-900 active:border-blue-900 active:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)]',
    'secondary': 'bg-blue-100 border-blue-100 text-blue-800 hover:bg-blue-200 active:bg-blue-200 active:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)]',
    'outline': 'bg-transparent border-blue-800 text-blue-800 hover:bg-blue-50 active:bg-blue-50 active:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)]',
    'link': 'text-blue-600 hover:text-blue-400 active:text-blue-800',
    'plain': 'text-grey-600 hover:bg-grey-50 active:bg-grey-50 focus:bg-white focus:border-white'
  }
  classes.push(variantClasses[props.variant])

  // 尺寸樣式 - 根據變體調整
  if (props.variant === 'link') {
    const linkSizeClasses = {
      'small': 'text-xs tracking-[0.48px]',
      'medium': 'text-sm tracking-[0.56px]',
      'large': 'text-base tracking-[0.64px]'
    }
    classes.push(linkSizeClasses[props.size])
  } else if (props.variant === 'plain') {
    const plainSizeClasses = {
      'small': 'min-w-[66px] h-8 px-2 text-xs tracking-[0.48px]',
      'medium': 'min-w-[82px] h-9 px-3 py-2 text-sm tracking-[0.56px]',
      'large': 'min-w-[98px] h-12 px-4 py-3 text-base tracking-[0.64px]'
    }
    classes.push(plainSizeClasses[props.size])
  } else {
    const sizeClasses = {
      'small': 'min-w-[66px] h-8 px-2 text-xs tracking-[0.48px]',
      'medium': 'min-w-[82px] h-9 px-3 py-2 text-sm tracking-[0.56px]',
      'large': 'min-w-[98px] h-12 px-4 py-3 text-base tracking-[0.64px]'
    }
    classes.push(sizeClasses[props.size])
  }

  // 禁用狀態樣式
  if (props.disabled) {
    if (props.variant === 'link' || props.variant === 'plain') {
      classes.push('text-grey-300')
    } else {
      classes.push('bg-grey-200 border-grey-200 text-grey-400')
    }
  }

  return classes.join(' ')
})
</script>

<style scoped>
/* 只保留必要的深度樣式，其他都用 UnoCSS 處理 */
/* 圖標間距樣式 */
.icon-base.icon-left {
  margin-right: 12px;
}

.icon-base.icon-right {
  margin-left: 12px;
}

/* 禁用狀態下的 SVG 圖標顏色 - 根據變體分類 */
:deep(.el-button.is-disabled) {

  /* outline, plain, link 變體使用 grey-300 */
  &.outline,
  &.plain,
  &.link {
    svg>path {
      fill: #d1d5db;
      /* grey-300 */
    }
  }

  /* primary, secondary 變體使用 grey-400 */
  &.primary,
  &.secondary {
    svg>path {
      fill: #9ca3af;
      /* grey-400 */
    }
  }
}
</style>