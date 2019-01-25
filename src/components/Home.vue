<template>
    <div class="container">
      <div style=""><Tree-view></Tree-view></div>
      <div style="position: absolute;right: 0;overflow: hidden;overflow-x: auto;"><router-view/></div>
    </div>
</template>
<script>
  import TreeView from "./TreeView";
  export default {
    components: {
      TreeView
    },
    name: "home"
  };
</script>
<style scoped>
  .container {
    width: 100%;
    padding: 0;
    margin: 0;
    min-height: 900px;
    background: #F2F2F2;
    overflow-x: auto;
  }
  .container .main .side-bar {

  }
  .container .main .side-bar::-webkit-scrollbar{
    display: none;
  }
</style>
