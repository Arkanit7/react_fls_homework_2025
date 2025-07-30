import DBClient from './DBClient'

const apiClient = (collectionName, delay = 500, data = [], errorRate) => {
  const client = new DBClient(collectionName, delay, data, errorRate)

  return {
    create: async (item) => {
      const response = await client.create(item)
      return response.data
    },
    getAll: async () => {
      const response = await client.readAll()
      return response.data
    },
    getById: async (id) => {
      const response = await client.readById(id)
      return response.data
    },
    getPaginated: async (page, limit) => {
      const response = await client.readPaginated(page, limit)
      return response.data
    },
    update: async (id, item) => {
      const response = await client.update(id, item)
      return response.data
    },
    delete: async (id) => {
      const response = await client.delete(id)
      return response.data
    },
  }
}

export default apiClient
