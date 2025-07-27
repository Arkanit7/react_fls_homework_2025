const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export default {
  /** @param {number?} limit - A limit for max posts request. */
  async getAllPosts(limit) {
    const postsUrl = new URL(API_BASE_URL + '/posts')

    if (limit) postsUrl.searchParams.append('_limit', limit)

    const response = await fetch(postsUrl)

    if (!response.ok) throw new Error('Fetch failed.')

    return response.json()
  },
}
