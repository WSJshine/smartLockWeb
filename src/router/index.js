import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TreeViewDetail from '@/components/TreeViewDetail'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Personal from '@/components/Personal'
import SmartDevice from '@/components/SmartDevice'
import Product from '@/components/Product'
import Information from '@/components/Information'
import Informations from '@/components/Informations'
import Addfacility from '@/components/Addfacility'
import Lock from '@/components/Lock'
import Facilitys from '@/components/Facilitys'
import Alarm from '@/components/Alarm'
import Smarts from '@/components/Smarts'
import Yangan from '@/components/Yangan'
import Shuibiao from '@/components/Shuibiao'
import Dianbiao from '@/components/Dianbiao'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'selected',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {path:'/',name:'TreeViewDetail',component:TreeViewDetail},
        {path:'/personal',name:'personal',component:Personal},
        {path:'/smartdevice',name:'smartdevice',component:SmartDevice},
        {path:'/product',name:'product',component:Product},
        {path:'/information',name:'information',component:Information},
        {path:'/informations/:id',name:'informations',component:Informations},
        {path:'/addfacility',name:'addfacility',component:Addfacility},
        {path:'/lock',name:'lock',component:Lock},
        {path:'/facilitys/:id',name:'facilitys',component:Facilitys},
        {path:'/alarm',name:'slarm',component:Alarm},
        {path:'/smarts',name:'smarts',component:Smarts},
        {path:'/yangan',name:'yangan',component:Yangan},
        {path:'/shuibiao',name:'shuibiao',component:Shuibiao},
        {path:'/dianbiao',name:'dianbiao',component:Dianbiao},
      ]
    },
  ],
})
