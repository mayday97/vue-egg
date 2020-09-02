<template>
  <div class="home">
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import {Button} from 'element-ui';
export default {
  name: 'Home',
  components: {
    [Button.name]:Button
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
