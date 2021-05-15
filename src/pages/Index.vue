<template>
  <Layout> <index  :postsHome="$page.allPosts.edges"></index> </Layout>
</template>

<script>
import Index from "../layouts/section/Index";
export default {
  metaInfo: {
    title: "Início",
  },
  components: {
    Index,
  },
};
</script>
<page-query>
  query {    
    allPosts(filter: {lang:{ eq: "pt-br"}}, limit: 5, order: DESC) {     
      edges {
        node {
          title
          path
          image   
          excerpt       
        }
      }
    }
  }
</page-query>