<template>
  <div class="container">
    <div class="tree-view-menu">
      <Tree-view-item :menus='menus'></Tree-view-item>
    </div>
  </div>
</template>
<script>
  import TreeViewItem from "./TreeViewItem";
  const menusData = [];
  export default {
    components: {
      TreeViewItem
    },
    name: "TreeViewMenu",
    data() {
      return {
        menus: this.$store.state.menusModule.menus
      };
    }
  };
</script>
<style scoped>
  .container{
    width: 360px;
    min-height: 900px;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 18px;
    padding: 0;
    position: absolute;
    background-color: #ffffff;
  }
  .tree-view-menu {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  /*.tree-view-menu::-webkit-scrollbar {*/
    /*height: 6px;*/
    /*width: 6px;*/
  /*}*/
  /*.tree-view-menu::-webkit-scrollbar-track {*/
    /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
    /*box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
  /*}*/
  /*.tree-view-menu::-webkit-scrollbar-thumb {*/
    /*background-color: #6e6e6e;*/
    /*outline: 1px solid #333;*/
  /*}*/
  .tree-view-menu::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    display: none;
  }
  .tree-view-menu::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  .tree-view-menu::-webkit-scrollbar-thumb {
    background-color: #6e6e6e;
    outline: 1px solid #708090;
  }
</style>
