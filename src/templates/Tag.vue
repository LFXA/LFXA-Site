<template>
  <Layout>
    <section id="container-centre" class="column inner centre flex-1">
      <h1
        class="page-title text-black-900 text-3xl md:text-center md:text-5xl mb-16 lg:mb-24 lg:text-6xl"
      >Tag — {{ $page.tag.title }}</h1>
      <div class="posts">
        <article 
          class="text-gray-500 mb-8 pb-8 border-b border-gray-200"
          v-for="element in posts"
          :key="element.node.id"  
        >
          <h2 class="text-4xl mb-3" >
            <g-link 
              class="block text-black-500 hover:text-blue-900"
              :to="element.node.path"
            >{{ element.node.title }}</g-link>
          </h2>
          <time :datetime="element.node.datetime">{{ element.node.humanTime}}</time>
        </article>
      </div>
    </section>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
    tag(id: $id) {
      title
      lang
      belongsTo {
        edges {
          node {
            ... on posts {
              id
              title
              path 
              humanTime : created(format:"Do MMMM YYYY")
              datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
              lang
            }
          }
        }
      }
    }
    
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Tags"
  },
  computed:{
    posts(){
     return this.$page.tag.belongsTo.edges.filter(e=>e.node.lang == this.$i18n.locale)
    }
  }
};
</script>
