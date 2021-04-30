<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <div class="post-header mb-12 md:mb-20">
        <h1
          class="page-title text-3xl md:text-center md:text-5xl lg:text-6xl"
          v-html="$page.posts.title"
        ></h1>
        <div class="text-sm md:text-base text-gray-600 flex justify-center">
          <p class="author">{{ $page.posts.author }}</p>
          <p class="px-2">—</p>
          <time :datetime="$page.posts.datetime">{{ $page.posts.humanTime }}</time>
          <p class="px-2">—</p>
          <p class="category">
            Posted in
            <g-link :to="$page.posts.category.path">{{ $page.posts.category.title }}</g-link>
          </p>
        </div>
        <figure class="mt-10 md:mt-20">
          <g-image :alt="$page.posts.image_caption" :src="$page.posts.image" />
          <figcaption
            class="text-center text-sm italic text-gray-600 mt-4"
          >{{ $page.posts.image_caption }}</figcaption>
        </figure>
      </div>

      <div class="content post md:px-16">
        <p v-html="$page.posts.excerpt"></p>

        <div v-html="$page.posts.content"></div>

        <ul class="flex pt-8 border-t border-gray-100">
          <li class="mr-2" v-for="tag in $page.posts.tags" :key="tag.id">
            <g-link
              :to="tag.path"
              class="inline-block border border-blue-300 px-4 py-2 text-blue-500 text-xs font-semibold rounded hover:text-white hover:bg-blue-500 hover:border-blue-500"
            >{{ tag.title}}</g-link>
          </li>
        </ul>
      </div>
    
      <Vssue title="LFXA_SITELOCAL" />
      
    </section>
  </Layout>
</template>
<page-query>
  query($id: ID!) {
    posts(id: $id) {
      title
      path
      image
      image_caption
      excerpt
      content
      humanTime : created(format:"DD/MM/YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
       category {
        title
        path
      } 
      author 
      tags {
        id
        title
        path
      } 
    }
  }
</page-query>
<script>
export default { 
  metaInfo() {
    return {
      title: this.$page.posts.title
    };
  }
};
</script>