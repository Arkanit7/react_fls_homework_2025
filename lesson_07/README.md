# Lesson #7 | 🛒 Euphoria Online Shop (React + Vite)

This is a modern React application for an online shop, built to demonstrate best practices in React Router, hooks, component composition, and scalable UI development. The project is tailored for the Ukrainian market and features a clean, modular structure with SCSS and TailwindCSS for styling.

## 🚀 Features

- Product catalog with dynamic routing
- Product detail pages
- Responsive design and layout
- Centralized route management with path aliases
- Custom hooks for data fetching
- Modular SCSS structure with alias support
- Example pages: Home, Shop, Contacts, Payment

## 🛠 Technologies Used

- **React 19**
- **Vite**
- **React Router**
- **SCSS (with modules and path aliases)**
- **ESLint**
- **Lucide React** (icon library)

## 📄 Pages Overview

- **Home:** Welcome page with a brief about the shop and its features.
- **Shop:** Product listing with cards, dynamic product detail links, and responsive layout.
- **Contacts:** Contact information and support details for Ukrainian customers.
- **Payment:** Payment options and instructions for online shopping in Ukraine.

## 📦 How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📚 Notes

- SCSS path aliases (`~` for styles, `@` for src) are configured in both Vite and `jsconfig.json` for easy imports.
- Component-specific styles are colocated with components; global styles are in `src/styles`.
- The project is structured for scalability and maintainability, following modern React and frontend best practices.
