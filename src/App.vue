<template>
  <div id="app">
    <MainTabbar></MainTabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabbar from './components/MainTabbar';
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import "./assets/css/base.css"
</style>
