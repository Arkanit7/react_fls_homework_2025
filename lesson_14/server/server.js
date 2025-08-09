const app = require('./app')
const PORT = process.env.PORT || 3000

app.listen(PORT, (_, address, port) => {
  console.log(`✅ EMR server is running at http://${address}:${port}`)
})
