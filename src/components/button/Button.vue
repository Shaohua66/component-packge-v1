<template>
  <button
    ref="_ref"
    class="msh-button"
    :class="{
      [`msh-button--${type}`]: type,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled || loading,
      [`msh-button--${size}`]: size,
      'is-circle': circle
    }"
    :disabled="disabled || loading"
  >
    <msh-icon icon="spinner" spin v-if="loading"></msh-icon>
    <msh-icon :icon="icon" v-if="icon"></msh-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import propsObj from './props.js'
const props = defineProps(propsObj)
const _ref = ref(null)
defineExpose({ _ref })
</script>
<style lang="scss" scoped></style>
