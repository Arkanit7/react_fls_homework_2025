const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3000

const DATA_PATH = path.join(__dirname, 'posts.json')

app.use(cors())
app.use(bodyParser.json())

// Проміжне програмне забезпечення зі штучною затримкою (наприклад, 250 мс)
app.use((_, __, next) => {
  setTimeout(next, 250)
})

function readPosts() {
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'))
}

function writePosts(posts) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2), 'utf-8')
}

// GET /posts - фільтрація, сортування, пагінація
app.get('/posts', (req, res) => {
  let posts = readPosts()
  const { title, sort, _page = 1, _limit = 25 } = req.query

  // Фільтрація за частиною title
  if (title) {
    posts = posts.filter((p) =>
      p.title.toLowerCase().includes(title.toLowerCase())
    )
  }

  // Сортування: ?sort=field1:asc,field2:desc
  if (sort) {
    const sortFields = sort.split(',').map((s) => {
      const [field, dir] = s.split(':')
      return { field, dir: dir || 'asc' }
    })
    posts.sort((a, b) => {
      for (let { field, dir } of sortFields) {
        if (a[field] < b[field]) return dir === 'asc' ? -1 : 1
        if (a[field] > b[field]) return dir === 'asc' ? 1 : -1
      }
      return 0
    })
  }

  // Пагінація
  const page = parseInt(_page)
  const limit = parseInt(_limit)
  const start = (page - 1) * limit
  const paginatedPosts = posts.slice(start, start + limit)
  const totalPages = Math.ceil(posts.length / _limit)
  const remaining = posts.length - (start + limit)

  res.json({
    items: paginatedPosts,
    remaining: remaining > 0 ? remaining : 0,
    totalPages,
  })
})

// GET /posts/:id
app.get('/posts/:id', (req, res) => {
  const posts = readPosts()
  const post = posts.find((p) => p.id === parseInt(req.params.id))
  if (!post) return res.status(404).json({ message: 'Post not found' })
  res.json(post)
})

// POST /posts
app.post('/posts', (req, res) => {
  const posts = readPosts()
  const newPost = {
    ...req.body,
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    likesNumber: 0,
    dislikesNumber: 0,
    publicationDate: new Date().toISOString(),
  }
  posts.push(newPost)
  writePosts(posts)
  res.status(201).json(newPost)
})

// PUT /posts/:id
app.put('/posts/:id', (req, res) => {
  let posts = readPosts()
  const id = parseInt(req.params.id)
  const index = posts.findIndex((p) => p.id === id)
  if (index === -1) return res.status(404).json({ message: 'Post not found' })
  posts[index] = { ...posts[index], ...req.body }
  writePosts(posts)
  res.json(posts[index])
})

// DELETE /posts/:id
app.delete('/posts/:id', (req, res) => {
  let posts = readPosts()
  const id = parseInt(req.params.id)
  posts = posts.filter((p) => p.id !== id)
  writePosts(posts)
  res.status(204).end()
})

// POST /posts/:id/like
app.post('/posts/:id/like', (req, res) => {
  let posts = readPosts()
  const post = posts.find((p) => p.id === parseInt(req.params.id))
  if (!post) return res.status(404).json({ message: 'Post not found' })
  post.likesNumber++
  writePosts(posts)
  res.json({ likesNumber: post.likesNumber })
})

// POST /posts/:id/dislike
app.post('/posts/:id/dislike', (req, res) => {
  let posts = readPosts()
  const post = posts.find((p) => p.id === parseInt(req.params.id))
  if (!post) return res.status(404).json({ message: 'Post not found' })
  post.dislikesNumber++
  writePosts(posts)
  res.json({ dislikesNumber: post.dislikesNumber })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
