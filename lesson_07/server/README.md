# Simple Backend API

This is a simple Express.js backend for managing products. It uses a local `products.json` file for data storage.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

## API Endpoints

### Get all products

- **GET** `/api/products`
- **Response:** Array of all products

### Get product by ID

- **GET** `/api/products/:id`
- **Params:**
  - `id` (number) — Product ID
- **Response:** Product object or 404 if not found

### Search products by name

- **GET** `/api/products/search?q=searchTerm`
- **Query:**
  - `q` (string) — Search term (case-insensitive, partial match)
- **Response:** Array of matching products

### Add a new product

- **POST** `/api/products`
- **Body:**
  ```json
  {
    "name": "Product Name",
    "price": 123,
    "imageUrl": "https://example.com/image.jpg"
  }
  ```
- **Response:** Created product object

### Update a product

- **PUT** `/api/products/:id`
- **Params:**
  - `id` (number) — Product ID
- **Body:**
  ```json
  {
    "name": "Updated Name",
    "price": 456,
    "imageUrl": "https://example.com/image.jpg"
  }
  ```
- **Response:** Updated product object or 404 if not found

### Delete a product

- **DELETE** `/api/products/:id`
- **Params:**
  - `id` (number) — Product ID
- **Response:** Deleted product object or 404 if not found

## Notes

- All endpoints return JSON.
- The server introduces a 1-second artificial delay for each request.
- Data is stored in `products.json` in the project directory.
