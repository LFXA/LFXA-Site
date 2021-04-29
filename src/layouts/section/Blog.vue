<template>
  
    <section id="container-centre" class="column centre flex-1">
      <h1
        class="page-title text-3xl md:text-center md:text-5xl mb-8 lg:mb-8 lg:text-6xl"
      >
        Blog
      </h1>
      <div class="flex space-x-4 p-3 mb-5 place-content-center place-items-center">
        <g-link class="flex-1" v-for="entryCat in categories" :key="entryCat.node.id" :to="entryCat.node.path">{{entryCat.node.title}}</g-link>       
      </div>
      <div class="p-2">
        
        <div class="posts flex flex-wrap -mx-2">
          <div
            class="w-full md:w-1/3 mb-8 px-2"
            v-for="entry in posts"
            :key="entry.node.id"
          >
            <article
              class="article-card bg-background-primary overflow-hidden rounded-lg shadow-card flex-1"
            >
              <g-link
                class="featured-image-link block relative overflow-hidden"
                :to="entry.node.path"
              >
                <ul class="absolute bottom-0 left-0 flex p-8 z-9">
                  <li class="mr-2">
                    <span
                      class="inline-block bg-blue-500 px-4 py-2 text-white text-xs font-bold rounded"
                      >{{ entry.node.category.title }}</span
                    >
                  </li>
                </ul>
                <figure>
                  <g-image
                    class="block loaded"
                    :alt="entry.node.image_caption"
                    :src="entry.node.image"
                  />
                </figure>
              </g-link>
              <div class="p-8">
                <h2 class="text-2xl mb-6">
                  <g-link
                    class="block text-copy-primary hover:text-blue-500"
                    :to="entry.node.path"
                    >{{ entry.node.title }}</g-link
                  >
                </h2>
                <div class="text-sm text-copy-primary md:flex mb-4">
                  <p class="author">{{ entry.node.author }}</p>
                  <p class="hidden md:block px-2">—</p>
                  <time :datetime="entry.node.datetime">{{
                    entry.node.humanTime
                  }}</time>
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
  props:{
    posts:Array,
    categories: Array
    }
};
</script>