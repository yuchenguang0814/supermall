<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    </home-swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {GetHomeMultidata} from 'network/home'
  import HomeSwiper from './childrenComps/HomeSwiper'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data() {
      return {
        banners: null,
        recommand: null
      }
    },
    created() {
      GetHomeMultidata().then(res => {
        this.banners = res.data.banner
        this.recommand = res.data.recommand
        console.log(res.data)
      })
    
      
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
