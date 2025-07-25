export const BASE_URL = import.meta.env.PROD
  ? 'https://products-api-bwqr.onrender.com/'
  : 'http://localhost:5000/'

export const API = {
  productsList: BASE_URL + 'api/products',
  addProduct: BASE_URL + 'api/products',
  getUpdateProductLink: (id) => BASE_URL + `api/products/${id}`,
  getProductById: (id) => BASE_URL + `api/products/${id}`,
  getDeleteProductLink: (id) => BASE_URL + `api/products/${id}`,
}
