<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="header">
    <div class="logo"><img src="@/assets/imgs/logo.png"/></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
    <el-sub-menu v-for="(item) in menuData" :key="item.id" :index="item.id">
        <template #title>{{ item.title }}</template>
        <template v-if="item.children">
            <el-menu-item v-for="(item1) in item.children" :key="item1.id" :index="item1.id">{{ item1.title }}</el-menu-item>
        </template>
        <el-menu-item :index="item.id" v-else>{{ item.title }}</el-menu-item>
    </el-sub-menu>
    </el-menu>
    <div class="personage">
      <el-icon><User /></el-icon>
      张三<el-icon><SwitchButton /></el-icon>
    </div>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { menuData } from './menu';
//   const activeIndex = ref(menuData)
  const activeIndex2 = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  

<style scoped scss>
.header{
  display: flex;
  position: relative;
  .el-menu-demo{
    width: 100%;
    padding-right: 200px;
  }
  .logo{
    max-width: 160px;
    display: inline-block;
    img{
      max-width: 100%;
    }
}
.personage{
  line-height: var(--el-menu-item-height);
  padding: 0 20px;
  height: 100%;
  text-align: right;
  position: absolute;
  right: 0;
}
}

</style>