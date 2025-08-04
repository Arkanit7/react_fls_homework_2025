# Lesson 13: RTK Query

This project is a modern React application bootstrapped with Vite, featuring a posts system with pagination, infinite scroll, CRUD operations, and a clean UI. It demonstrates best practices in state management, API integration, and component-based architecture.

## 🚀 Tech Stack

- **Frontend Framework:** React (^19.1.1)
- **Build Tool:** Vite (^7.0.6)
- **Bundler:** esbuild (via Vite)
- **State Management:** Redux Toolkit (^2.8.2) + RTK Query
- **Routing:** React Router (^7.7.1)
- **CSS-in-JS:** styled-jsx (^5.1.7)
- **Linter:** ESLint (^9.32.0)
- **Formatter:** Prettier (^3.6.2)
- **Icons:** Lucide (^0.534.0)
- **Utilities:** clsx (^2.1.1)
- **Notifications:** sonner

## 📁 Project Structure

```
├── public/
│   └── logo.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── app/
│   │   └── routes.js
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── NavBar.jsx
│   │   └── ui/
│   │       ├── Clickable.jsx
│   │       ├── Container.jsx
│   │       ├── Field.jsx
│   │       ├── FieldWithLabel.jsx
│   │       ├── Label.jsx
│   │       ├── Modal.jsx
│   │       ├── Textarea.jsx
│   │       ├── TextareaWithLabel.jsx
│   │       └── Typography.jsx
│   ├── features/
│   │   └── posts/
│   │       ├── constants.js
│   │       ├── postsApi.js
│   │       └── components/
│   │           ├── PostPreview.jsx
│   │           ├── PostDetails.jsx
│   │           ├── PostForm.jsx
│   │           ├── PostFormManager.jsx
│   │           ├── Pagination.jsx
│   │           ├── PaginationManager.jsx
│   │           ├── InfiniteList.jsx
│   │           └── PaginatedList.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   ├── ContactsPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── InfiniteScrollingPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── PaginationPage.jsx
│   └── styles/
│       ├── index.css
│       └── reset.css
├── package.json
├── vite.config.js
├── jsconfig.json
├── netlify.toml
├── bun.lock
├── README.md
└── ...
```

## ✨ Features

- Modern, modular React codebase
- Posts CRUD: create, read, update, delete
- Pagination and infinite scrolling for posts
- Optimistic UI updates for likes/dislikes
- Toast notifications for user feedback
- Responsive, accessible UI with styled-jsx
- ESLint and Prettier for code quality
- Hot Module Replacement (HMR)

## 📦 Scripts

- `dev` – Start the development server
- `build` – Build for production
- `preview` – Preview the production build
- `lint` – Run ESLint
- `format` – Run Prettier

## 📚 Notes

- API base URL is configured via `VITE_BASE_API_URL` in your environment.
- Uses RTK Query for efficient data fetching and caching.
- All UI components are reusable and follow a consistent design system.
