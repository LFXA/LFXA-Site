const axios = require('axios')
module.exports = function (api) {

  api.onCreateNode(options => {
    if (options.internal.typeName === 'Blog') {

      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      return {
        ...options
      };
    }
  }),
  api.loadSource(async actions => { 
    let responsePosts
    const tags = actions.addCollection('Tag')
    const categories = actions.addCollection('Category')
    try {     
       responsePosts = await axios.post(process.env.REALM_URL_GRPHQL, {query: `query{
         posts{ 
           _id 
           title
           path
           idPost
           image 
           created 
           image_caption        
           author 
           excerpt
           category
           tags
           content}}`}, {headers:{'apiKey': process.env.REALM_API_KEYS}})     
    } catch (error) {
    console.error(error);
    }
    const collection = actions.addCollection({
      typeName: 'posts'
    })
    collection.addReference('category','Category');
    collection.addReference('tags','Tag');
    for (const post of responsePosts.data.data.posts) {
      categories.addNode({
        id: post.category,
        title: post.category,
        path: '/category/'+post.category
      });      
      for (const postTag of post.tags){
      tags.addNode({
            id: postTag,
            title: postTag,
            path: '/tag/'+postTag
      });
     
      }  
      collection.addNode({
        id: post._id,
        title: post.title,
        path: post.path,
        idPost: post.idPost,
        image: post.image,
        created: post.created,
        image_caption: post.image_caption,
        author: post.author,
        excerpt: post.excerpt,
        category: post.category, 
        tags: post.tags,
        content: post.content
      })   
    }
  })
}