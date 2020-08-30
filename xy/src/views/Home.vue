<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    this.getUser()
  },
  methods:{
    async getUser(){
      let ret=await this.$axios.get('/api/user/info?id=97')
      console.log(ret);
      let params={
        name:'哈哈',
        age:18,
        sex:'female'
      }
      let post=await this.$axios.post('/api/user/edit',params)
      console.log(post);
    }
  }
}
</script>
