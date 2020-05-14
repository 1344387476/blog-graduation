<template>
   <div id="app" class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Tabbar'
}
</script>

<style>
.tab-bar {
    display: flex;
    height: 49px;
    background-color: rgba(224,102,255, .9);
  }
</style>