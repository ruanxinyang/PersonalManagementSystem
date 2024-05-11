<script setup lang="ts">
import { ref } from 'vue';

// 卡片数据（注意vite下url的获取和使用）
const cardList = ref<{ [prop: string]: any }[]>([
  {
    title: 'one',
    active: true,
    url: new URL('../../assets/imgs/001.jpg', import.meta.url).href,
  },
  {
    title: 'two',
    active: false,
    url: 'src/assets/imgs/002.jpg',
  },
  {
    title: 'three',
    active: false,
    url: 'src/assets/imgs/003.png',
  },
  {
    title: 'four',
    active: false,
    url: 'src/assets/imgs/004.jpg',
  },
  {
    title: 'five',
    active: false,
    url: 'src/assets/imgs/005.jpg',
  },
])
// 切换active
function toggleActive(index: number) {
  cardList.value.forEach((item, i) => {
    item.active = (i === index)
  })
}
</script>

<template>
  <div class="container">
    <template v-for="(img, index) in cardList" :key="index">
      <div
        class="panel" :class="[img.active ? 'active' : '']"
        :style="{
          backgroundImage: `url(${img.url})`,
        }"
        @click="toggleActive(index)"
      >
        <h3>{{ img.title }}</h3>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 90vw;

  .panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    transition: all 700ms ease-in;
  }

  .panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    color: #000;
    opacity: 0;
  }

  .panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }

  .panel.active {
    flex: 5
  }
}



@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>
