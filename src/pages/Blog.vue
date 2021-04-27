<template>
    <Layout>
    <blog :posts="$page.posts.posts"></blog>
  </Layout>
</template>
<script>
import Blog from "../layouts/section/Blog";
export default {
  components: {
    Blog
  },
  metaInfo: {
    title: "Blog"
  }
};
</script>
<page-query>
  query {    
    posts {      
      posts {       
          title
          path
          image  
          image_caption        
          author 
          category
        
      }
    }
  }
</page-query>