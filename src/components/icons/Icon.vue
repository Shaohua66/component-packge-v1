<template>
  <i class="msh-icon" :class="{ [`msh-icon--${props.type}`]: props.type }">
    <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
  </i>
</template>

<script setup>
import { computed } from 'vue'
import propObj from './props.js'
import { omit } from 'lodash-es'
defineOptions({
  name: 'MshIcon'
})
const props = defineProps(propObj)
// 我们使用 omit 可以将我们自定义的属性进行过滤
const filterProps = computed(() => {
  return omit(props, ['type'])
})
</script>

<style></style>
