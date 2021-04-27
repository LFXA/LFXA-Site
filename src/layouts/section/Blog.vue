<template>
  
    <section id="container-centre" class="column centre flex-1">
      <h1
        class="page-title text-3xl md:text-center md:text-5xl mb-16 lg:mb-24 lg:text-6xl"
      >
        Blog
      </h1>
      <div class="px-2">
        <div class="posts flex flex-wrap -mx-2">
          <div
            class="w-full md:w-1/3 mb-8 px-2"
            v-for="entry in posts"
            :key="entry._id"
          >
            <article
              class="article-card bg-background-primary overflow-hidden rounded-lg shadow-card flex-1"
            >
              <g-link
                class="featured-image-link block relative overflow-hidden"
                :to="'blog/'+entry.path"
              >
                <ul class="absolute bottom-0 left-0 flex p-8 z-9">
                  <li class="mr-2">
                    <span
                      class="inline-block bg-blue-500 px-4 py-2 text-white text-xs font-bold rounded"
                      >{{ entry.category }}</span
                    >
                  </li>
                </ul>
                <figure>
                  <g-image
                    class="block loaded"
                    :alt="entry.image_caption"
                    :src="entry.image"
                  />
                </figure>
              </g-link>
              <div class="p-8">
                <h2 class="text-2xl mb-6">
                  <g-link
                    class="block text-copy-primary hover:text-blue-500"
                    :to="entry._id"
                    >{{ entry.title }}</g-link
                  >
                </h2>
                <div class="text-sm text-copy-primary md:flex mb-4">
                  <p class="author">{{ entry.author }}</p>
                  <p class="hidden md:block px-2">—</p>
                  <!-- <time :datetime="entry.node.datetime">{{
                    entry.node.humanTime
                  }}</time> -->
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>  
</template>

<script>
export default {
  name: "blog", 
  computed:{
    pages(){

      console.log(this.posts)
    }
  },
  props:{
    posts:Array
    }
};
</script>