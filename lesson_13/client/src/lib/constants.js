export const navigation = {
  home: {index: '/'},
  pagination: {index: '/pagination'},
  infinite: {index: '/infinite'},
  contacts: {index: '/contacts'},
  posts: {
    index: '/posts',
    getEdit(id) {
      return this.index + `/${id}`
    },
    create: {index: '/posts/'},
  },
}
