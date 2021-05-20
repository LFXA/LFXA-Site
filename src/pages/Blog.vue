<template>
    <Layout>
    <blog :posts="$page.allPosts.edges" :categories="$page.allCategory.edges" :alltags="$page.allTag.edges"></blog>
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
    allPosts(filter: {lang:{ eq: "pt-br"}}) {     
      edges {
        node {
          title
          path
          image
          humanTime : created(format:"DD/MM/YYYY")
          datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
          author 
          category {
            title
            path
          }  
        }
      }
    }
    allCategory(filter: {lang:{ eq: "pt-br"}}){
    edges{
      node{
        title
        id
        path
      }
    }
  }
   allTag(filter: {lang:{ eq: "pt-br"}}, sort: [{by: "title",order:ASC}]){
    edges{
      node{
        title
        id
        path
        lang
        belongsTo{
           edges{
            node{
              ... on posts {
                lang
              }
            }
            }
          totalCount
        }
      }
    }
  }
}
</page-query>