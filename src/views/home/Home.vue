<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {GetHomeMultidata} from 'network/home'
  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        banners: null
      }
    },
    created() {
      GetHomeMultidata().then(res => {
        this.banners = res.data.banner
        console.log(this.banners)
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
