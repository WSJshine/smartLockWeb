let menus = [
  { id: 1, level: 1, name: '系统首页', type: "link", url: "/home",icon:"home_lf" },
  {
    id: 2,
    level: 1,
    name: '设备管理',
    type: "button",
    icon:"device",
    isExpanded: false,
    isSelected: false,
    subMenu: [
      { id: 21, level: 2, name: '智能设备管理', type: "link", url: "/smartdevice" },
      { id: 22, level: 2, name: '产品管理', type: "link", url: "/product" },
      { id: 23, level: 2, name: '设备报警', type: "link", url: "/alarm" },
      { id: 24, level: 2, name: '智能门锁', type: "link", url: "/lock" },
      { id: 25, level: 2, name: '智能电表', type: "link", url: "" },
      { id: 26, level: 2, name: '智能水表', type: "link", url: "" },
      { id: 27, level: 2, name: '智能烟感', type: "link", url: "" },
    ]
  },
  { id: 3, level: 1, name: '消息管理', type: "link", url: "/information",icon:"information" },
  { id: 4, level: 1, name: '用户管理', type: "link", url: "/personal" ,icon:"user"}
];
let levelNum = 1;
let startExpand = []; // 保存刷新后当前要展开的菜单项
function setExpand(source, url) {
  let sourceItem = '';
  for (let i = 0; i < source.length; i++) {
    sourceItem = JSON.stringify(source[i]); // 把菜单项转为字符串
    if (sourceItem.indexOf(url) > -1) { // 查找当前 URL 所对应的子菜单属于哪一个祖先菜单
      if (source[i].type === 'button') { // 导航菜单为按钮
        source[i].isSelected = true; // 设置选中高亮
        source[i].isExpanded = true; // 设置为展开
        startExpand.push(source[i]);
        // 递归下一级菜单，以此类推
        setExpand(source[i].subMenu, url);
      }
      break;
    }
  }
}
const state = {
  menus,
  levelNum
};
const mutations = {
  findParents(state, payload) {
    if (payload.menu.type === "button") {
      payload.menu.isExpanded = !payload.menu.isExpanded;
    } else if (payload.menu.type === "link") {
      if (startExpand.length > 0) {
        for (let i = 0; i < startExpand.length; i++) {
          startExpand[i].isSelected = false;
        }
      }
      startExpand = []; // 清空展开菜单记录项
      setExpand(state.menus, payload.menu.url);
    }
  },
  firstInit(state, payload) {
    setExpand(state.menus, payload.url);
  }
};
import axios from 'axios'
export default {
  state,
  mutations,
};
