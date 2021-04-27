<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <div class="post-header mb-12 md:mb-20">
        <h1
          class="page-title text-3xl md:text-center md:text-5xl lg:text-6xl"
          v-html="post.title"
        ></h1>
        <div class="text-sm md:text-base text-gray-600 flex justify-center">
          <p class="author">{{ post.author }}</p>
          <p class="px-2">—</p>
          <!-- <time :datetime="$page.post.datetime">{{ $page.post.humanTime }}</time> -->
          <p class="px-2">—</p>
          <p class="category">
            Posted in
            <g-link :to="post.category">{{ post.category }}</g-link>
          </p>
        </div>
        <figure class="mt-10 md:mt-20">
          <g-image :alt="post.image_caption" :src="post.image" />
          <figcaption
            class="text-center text-sm italic text-gray-600 mt-4"
          >{{ post.image_caption }}</figcaption>
        </figure>
      </div>

      <div class="content post md:px-16">
        <p v-html="post.excerpt"></p>

        <div v-html="post.content"></div>

        <ul class="flex pt-8 border-t border-gray-100">
          <li class="mr-2" v-for="tag in post.tags" :key="tag">
            <g-link
              :to="tag"
              class="inline-block border border-blue-300 px-4 py-2 text-blue-500 text-xs font-semibold rounded hover:text-white hover:bg-blue-500 hover:border-blue-500"
            >{{ tag}}</g-link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
import Realm from "realm";
import {PostSchema} from '../model/PostSchema.js'
export default {
   data () {
    return {
      post: null
    }
  },
  metaInfo() {
    return {
      title: this.post.title
    };
  },
  async mounted() {    
     let routerSplit = this.$router.history.current.path.split("/");
     const app = new Realm.App({ id: "application-0-gzfry" });   
    const credentials = Realm.Credentials.apiKey(process.env.GRIDSOME_REALM_API_KEYS);
    try {
        const user = await app.logIn(credentials);
    } catch (err) {
      console.error("Failed to log in", err.message);
    }
      console.log(`Logged in with the user id: ${user.id}`);

     const realm = await Realm.open({
    schema: [PostSchema],
    sync: {
      user: user,
      partitionValue: "realm_id",
    },
  });
  const posts = realm.objects("Posts");
  const post = posts.filtered(`idPost = \"${routerSplit[routerSplit.length - 2]}/${routerSplit[routerSplit.length - 1]}\"`);
  console.log(`${posts.length} tasks are Open (Total tasks: ${post})`);
  }
};
</script>
