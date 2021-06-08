<template>
<div class="row">

</div>
</template>
<script>
import PostService from '../PostService';
const postService = new PostService();

export default {
  name: 'Home',
  data(){
    return {
      posts:[]
    }
  },
  created() {
    postService.getAllPosts()
     .then(res => {
       this.posts = res.data;
       console.log(this.posts);
     })
     .catch(err => console.log(err));
  }
}
</script>