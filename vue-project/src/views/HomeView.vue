<script setup lang="ts">
import vHeader from '@/components/layout/Header.vue';

</script>

<template>
  <main>
    <div class="common-layout">
    <el-container>
      <el-header><v-header /></el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  <el-backtop :right="100" :bottom="100" />
  </main>
</template>
<style>
.el-header{
  --el-header-padding: 0;
}
</style>