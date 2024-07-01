<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <msh-icon icon="user-secret" />
    <msh-icon icon="bars" />
    <msh-icon icon="shield-halved" />
    <msh-icon icon="file" />
    <msh-icon icon="filter" />
    <msh-icon icon="gear" />
    <msh-icon icon="barcode" />
    <msh-icon icon="folder" />
    <msh-icon icon="folder-open" />
  </div>

  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <msh-icon icon="user-secret" size="2xs" />
    <msh-icon icon="bars" size="xs" />
    <msh-icon icon="shield-halved" size="sm" />
    <msh-icon icon="file" size="lg" />
    <msh-icon icon="filter" size="xl" />
    <msh-icon icon="gear" size="2xl" />
    <msh-icon icon="barcode" size="2x" />
    <msh-icon icon="folder" size="3x" />
    <msh-icon icon="folder-open" size="4x" />
  </div>

  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <msh-icon icon="user-secret" rotation="90" size="xl" />
    <msh-icon icon="bars" rotation="270" size="xl" />
    <msh-icon icon="shield-halved" rotation="180" size="xl" />
    <msh-icon icon="file" flip="horizontal" size="xl" />
    <msh-icon icon="filter" flip="vertical" size="xl" />
    <msh-icon icon="folder-open" flip="both" size="xl" />
  </div>

  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <msh-icon icon="user-secret" size="xl" beat />
    <msh-icon icon="bars" size="xl" beat-fade />
    <msh-icon icon="shield-halved" size="xl" bounce />
    <msh-icon icon="file" size="xl" fade />
    <msh-icon icon="filter" size="xl" flip />
    <msh-icon icon="gear" size="xl" shake />
    <msh-icon icon="barcode" size="xl" spin />
    <msh-icon icon="folder" size="xl" spin spin-reverse />
    <msh-icon icon="folder-open" size="xl" spin-pulse />
  </div>

  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <msh-icon icon="user-secret" size="xl" type="primary" />
    <msh-icon icon="bars" size="xl" type="success" />
    <msh-icon icon="shield-halved" size="xl" type="info" />
    <msh-icon icon="file" size="xl" type="warning" />
    <msh-icon icon="filter" size="xl" type="danger" />
    <msh-icon icon="gear" size="xl" color="#e47412" />
    <msh-icon icon="barcode" size="xl" color="#7ec102" />
    <msh-icon icon="folder" size="xl" color="skyblue" />
    <msh-icon icon="folder-open" size="xl" color="rgba(255, 122, 122, .5)" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
