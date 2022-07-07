<template>
  <div style="width:100%;height:100%">
    <el-container>
    <el-aside width="210px">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
    
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">看板
            <router-link to="HelloVue"></router-link>
          </el-menu-item>
          <el-menu-item index="1-2">工作台</el-menu-item>
        </el-menu-item-group>
          <el-menu-item index="1-3">仓库</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">组件</template>
          <el-menu-item index="1-4-1">图标</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">其他</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">图表</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">通知</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <div class="main-container">
        <HelloVue></HelloVue>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  </div>
</template>

<script>
// import logo from "@/components/headLogo.vue";
import HelloVue from "@/components/HelloVue.vue"
export default {
  name: "index",
  components: { HelloVue },
  data() {
    return {
      isCollapse: true,
    };
  },

  // components: {},

  computed: {},

  mounted: {
  
  },

  methods: {},
};
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
    overflow: hidden;
  }
  .el-menu {
    height:100%
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
     height:100%;
     /* background:red; */
  }
.main-container{
  width:100%;
  height:100%;
  background:white;
}
  .el-container {
    /* margin-bottom: 40px; */
    height: 100%;
  }
 
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  
</style>