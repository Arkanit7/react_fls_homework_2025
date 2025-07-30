class DBClient {
  constructor(collectionName, delay = 500, initialData = [], errorRate = 0) {
    this.collectionName = `db_${collectionName}`
    this.delay = delay
    this.initialData = initialData
    this.errorRate = errorRate
    this.#initializeCollection()
  }

  #initializeCollection() {
    if (!localStorage.getItem(this.collectionName)) {
      localStorage.setItem(
        this.collectionName,
        JSON.stringify(this.initialData),
      )
    }
  }

  #getData() {
    return JSON.parse(localStorage.getItem(this.collectionName))
  }

  #setData(data) {
    localStorage.setItem(this.collectionName, JSON.stringify(data))
  }

  #imitateBackendCall(callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < this.errorRate) {
          reject({
            message: 'Помилка бекенду: сталася невідома помилка.',
            code: 500,
            details: 'Спробуйте пізніше.',
          })
        } else {
          try {
            const result = callback()
            resolve({data: result})
          } catch (e) {
            reject({
              message:
                e.message || 'Непередбачена помилка під час обробки даних.',
              code: 500,
              details: e.toString(),
            })
          }
        }
      }, this.delay)
    })
  }

  async create(item) {
    return this.#imitateBackendCall(() => {
      const data = this.#getData()
      const creationDate = new Date()
      const id = creationDate.getTime().toString()
      const createdAt = creationDate.toISOString()
      const newItem = {
        id,
        createdAt,
        likesNumber: 0,
        dislikesNumber: 0,
        ...item,
      }
      data.push(newItem)
      this.#setData(data)
      return newItem
    })
  }

  async readAll() {
    return this.#imitateBackendCall(() => {
      return this.#getData()
    })
  }

  async readById(id) {
    return this.#imitateBackendCall(() => {
      const data = this.#getData()
      const foundItem = data.find((item) => item.id === id)
      if (!foundItem) {
        throw new Error('Елемент не знайдено.')
      }
      return foundItem
    })
  }

  async readPaginated(page = 1, limit = 10) {
    return this.#imitateBackendCall(() => {
      const data = this.#getData()
      const totalItems = data.length
      const totalPages = Math.ceil(totalItems / limit)
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const items = data.slice(startIndex, endIndex)

      return {
        items: items,
        pagination: {
          totalItems,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      }
    })
  }

  async update(id, updatedItem) {
    return this.#imitateBackendCall(() => {
      const data = this.#getData()
      const index = data.findIndex((item) => item.id === id)
      if (index > -1) {
        data[index] = {...data[index], ...updatedItem, id}
        this.#setData(data)
        return data[index]
      }
      throw new Error('Елемент для оновлення не знайдено.')
    })
  }

  async delete(id) {
    return this.#imitateBackendCall(() => {
      let data = this.#getData()
      const initialLength = data.length
      data = data.filter((item) => item.id !== id)
      this.#setData(data)
      if (data.length === initialLength) {
        throw new Error('Елемент для видалення не знайдено.')
      }
      return {message: 'Елемент успішно видалено.', id: id}
    })
  }
}

export default DBClient
