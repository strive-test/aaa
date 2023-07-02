<template>
  <div>基本模板！
    <router-link to="/home">home</router-link>
    <router-link to="/order">order</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app{
  width: 100%;
  height: 100%;
}
</style>
