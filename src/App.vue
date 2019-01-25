<template>
  <div class="container" id="app">
      <div class="row">
        <nav-index></nav-index>
        <div class="main">
          <router-view/>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: "App"
  };
</script>
<style>
  .row{
    margin-right: 0 !important;
  }
  *{
    padding: 0;
    margin: 0;
  }
  #app{
    width: 100%;
    padding: 0;
    margin: 0;
    background: #f2f2f2;
  }
  .main{
    margin: 0;
    padding: 0;
  }
</style>
