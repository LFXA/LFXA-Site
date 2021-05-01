<template>
  
    <section id="container-centre" class="column centre flex-1">
      <h1
        class="page-title text-3xl md:text-center md:text-5xl mb-8 lg:mb-8 lg:text-6xl"
      >
        Blog
      </h1>
      <h2 class=" text-3xl  mb-4 ml-5">
        Categorias
      </h2>
      <div class="flex p-4 mb-5 justify-center  bg-blue-800">   
        <g-link class=" mr-5" v-for="entryCat in categories" :key="entryCat.node.id" :to="entryCat.node.path">{{entryCat.node.title}}</g-link>    
        
      </div>     
      <div class="p-6 grid grid-rows-2 grid-cols-6 gap-4">
        
          <div class="posts grid  grid-cols-3  grid-rows-1 gap-4 lg:col-span-5 col-span-6 m-4">
            <div
              class="w-full row-span-1 lg:col-span-1  col-span-3 m-4 p-8"
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
        <div class="m-4 lg:col-span-1 col-span-6 bg-blue-900 overflow-hidden rounded-lg shadow-card ">
          <h4 class="m-5">Tags</h4>
           <div class=" p-2 mx-2"  v-for="entryTag in alltags" :key="entryTag.node.id">   
              <g-link class="flex text-copy-primary justify-around" :to="entryTag.node.path"><span>{{entryTag.node.title}} </span>
                <span class="rounded-full h-6 w-6 flex items-center justify-center  text-copy-primary bg-blue-500 text-xl">  {{entryTag.node.belongsTo.totalCount}}
                   </span> 
              </g-link>           
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
    categories: Array,
    alltags: Array
    },    
};
</script>