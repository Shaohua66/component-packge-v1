<template>
  <h1 class="row-title">普通展示</h1>
  <div class="row">
    <msh-button>默认按钮</msh-button>
    <msh-button type="primary">主要按钮</msh-button>
    <msh-button type="info">信息按钮</msh-button>
    <msh-button type="success">成功按钮</msh-button>
    <msh-button type="warning">警告按钮</msh-button>
    <msh-button type="danger">危险按钮</msh-button>
  </div>

  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <msh-button plain>默认按钮</msh-button>
    <msh-button type="primary" plain>主要按钮</msh-button>
    <msh-button type="info" plain>信息按钮</msh-button>
    <msh-button type="success" plain>成功按钮</msh-button>
    <msh-button type="warning" plain>警告按钮</msh-button>
    <msh-button type="danger" plain>危险按钮</msh-button>
  </div>

  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <msh-button round>默认按钮</msh-button>
    <msh-button type="primary" round>主要按钮</msh-button>
    <msh-button type="info" round>信息按钮</msh-button>
    <msh-button type="success" plain round>成功按钮</msh-button>
    <msh-button type="warning" plain round>警告按钮</msh-button>
    <msh-button type="danger" plain round>危险按钮</msh-button>
  </div>

  <h1 class="row-title">禁用状态</h1>
  <div class="row">
    <msh-button disabled>默认按钮</msh-button>
    <msh-button type="primary" disabled>主要按钮</msh-button>
    <msh-button type="info" disabled>信息按钮</msh-button>
    <msh-button type="success" disabled>成功按钮</msh-button>
    <msh-button type="warning" disabled>警告按钮</msh-button>
    <msh-button type="danger" disabled>危险按钮</msh-button>
  </div>

  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <msh-button loading>默认按钮</msh-button>
    <msh-button type="primary" loading>主要按钮</msh-button>
    <msh-button type="info" loading>信息按钮</msh-button>
    <msh-button type="success" loading round>成功按钮</msh-button>
    <msh-button type="warning" loading round>警告按钮</msh-button>
    <msh-button type="danger" loading round>危险按钮</msh-button>
  </div>

  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <msh-button icon="file">默认按钮</msh-button>
    <msh-button type="primary" icon="gear">主要按钮</msh-button>
    <msh-button type="info" icon="folder" plain>信息按钮</msh-button>
    <msh-button type="success" icon="bug" plain>成功按钮</msh-button>
    <msh-button type="warning" icon="code" round>警告按钮</msh-button>
    <msh-button type="danger" icon="cube" round>危险按钮</msh-button>
  </div>

  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <msh-button icon="file" size="small">默认按钮</msh-button>
    <msh-button type="primary" icon="gear" size="small">主要按钮</msh-button>
    <msh-button type="info" icon="folder" plain>信息按钮</msh-button>
    <msh-button type="success" icon="bug" plain>成功按钮</msh-button>
    <msh-button type="warning" icon="code" plain size="large">警告按钮</msh-button>
    <msh-button type="danger" icon="cube" plain size="large">危险按钮</msh-button>
  </div>

  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <msh-button type="danger" circle>验</msh-button>
    <msh-button type="primary" icon="gear" circle></msh-button>
    <msh-button type="info" icon="folder" circle plain></msh-button>
    <msh-button type="success" icon="bug" circle plain></msh-button>
    <msh-button type="warning" icon="code" circle disabled></msh-button>
    <msh-button type="danger" icon="cube" circle disabled></msh-button>
  </div>

  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <msh-button type="primary" @click="clickHandler" ref="btnRef">主要按钮</msh-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const btnRef = ref(null)
function clickHandler() {
  console.log('被点击了', btnRef.value._ref)
}
</script>
<style lang="scss" scoped></style>
