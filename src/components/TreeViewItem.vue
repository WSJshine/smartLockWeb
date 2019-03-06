<template>
  <div class="tree-view-item">
    <div class="level" :class="'level-'+ menu.level" v-for="(menu,index) in menus" :key="menu.id">
      <div v-if="menu.type === 'link'">
        <router-link class="link" v-bind:to="menu.url" @click.native="toggle(menu)">
          <div class="ll" @click="curIndex=index" :class="{'links':curIndex===index}">
            {{menu.name}}</div></router-link>
      </div>
      <div v-if="menu.type === 'button'">
        <div class="button heading" :class="{selected: menu.isSelected,expand:menu.isExpanded}" @click="toggle(menu)">
          <div class="ll" @click="curIndex=index" :class="{'links':curIndex===index}">{{menu.name}}</div>
        </div>
        <transition name="fade">
          <div class="heading-children" v-show="menu.isExpanded" v-if="menu.subMenu">
            <Tree-view-item :menus='menu.subMenu'></Tree-view-item>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TreeViewItem",
    props: ["menus"],
    data(){
      return {
        curIndex:'',
      }
    },
    created() {
      this.$store.commit("firstInit", { url: this.$route.path });
    },
    methods: {
      toggle(menu) {
        this.$store.commit("findParents", { menu });
      }
    }
  };
</script>
<style scoped>
  a {
    text-decoration: none;
    color: #333;
  }
  .link, .button {
    display: block;
    /*padding: 10px 15px;*/
    transition: background-color 0.2s ease-in-out 0s, color 0.3s ease-in-out 0.1s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    text-align: center;
    height: 80px;
    font-size: 18px;
    text-decoration: none;
    /*color: #ffffff;*/
  }
  .button {
    position: relative;
  }
  .home_lf{
    background: url("../assets/home_leftnav.png") no-repeat;
    background-position: center top;
    background-attachment: fixed;
  }
  .device{
    background: url("../assets/home_leftnav.png") no-repeat;
  }
  .information{
    background: url("../assets/home_leftnav.png");
  }
  .user{
    background: url("../assets/home_leftnav.png");
  }
  .link:hover, .button:hover {
    color: #ffac2a;
    cursor: pointer;
    text-decoration: none;
  }
  .ll{
    position: relative;
    top: 15px;
  }
  .links{
    width: 208px;
    height: 50px;
    border-radius: 24px;
    background: #5479eb;
    margin: auto;
    line-height: 50px;
    color: #ffffff;
    text-decoration: none;
  }
  .lin{
    color: #ffac2a;
    text-decoration: none;
  }
  .dianji{
    background: #ffffff;
    text-decoration: none;
  }
  .heading-children {
    padding-left: 14px;
    overflow: hidden;
    background: #eaeeff;
    /*color: #ffffff;*/
  }
  .expand {
    display: block;
  }
  .collapsed {
    display: none;
  }
  .selected {
    /*color: #ffffff;*/
  }
  .fade-enter-active {
    transition: all 0.5s ease 0s;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-leave-to {
    height: 0;
  }
</style>
