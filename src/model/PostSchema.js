export const PostSchema = {
    name: 'Post',
    properties: {
      _id: 'objectId?',
      author: 'string?',
      category: 'string?',
      content: 'string?',
      created: 'date?',
      excerpt: 'string?',
      idPost: 'string?',
      image: 'string?',
      image_caption: 'string?',
      path: 'string?',
      realm_id: 'string?',
      tags: 'string[]',
      title: 'string?',
    },
    primaryKey: '_id',
  };