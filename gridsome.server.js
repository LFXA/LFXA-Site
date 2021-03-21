
module.exports = function (api) {

  api.onCreateNode(options => {
    if (options.internal.typeName === 'Blog') {

      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      return {
        ...options
      };
    }
  })
}
