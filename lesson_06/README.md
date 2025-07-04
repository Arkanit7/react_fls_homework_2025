# 📚 Homework #6 - React Hooks

This is a React application created to showcase the solutions for a set of practical tasks focused on mastering React hooks, component composition, and modern UI development.

## 📝 Tasks

This project contains four independent tasks, each demonstrating a different aspect of React hooks, component design, and modern UI patterns. Below is a brief description of each task:

### Task 1: Calculator with Custom Hooks

A simple calculator that demonstrates the use of custom hooks for managing form state and memoizing computed values. It features reusable input components and a result display with render count visualization.

### Task 2: Data Table (DataGrid) with Sorting and Filtering

An interactive data table that supports sorting and filtering. It uses custom hooks, accessibility best practices, and a modular component structure. The table displays a list of movies with Ukrainian localization.

### Task 3: Responsive Window Metrics

A utility component that displays the current window size and device type. It uses a custom hook to track window dimensions and updates responsively as the user resizes the browser.

### Task 4: NPM React Packages Search

A searchable list of popular React-related NPM packages. Demonstrates debounced search, efficient filtering, and a clean, reusable list UI. Includes render count visualization for educational purposes.

## ⚙ Technologies Used

- **React 19**
- **TailwindCSS**
- **Vite**
- **ESLint**
- **clsx** (for conditional classNames)
- **Lucide React** (icon library)

## 📁 Folder Structure

```
lesson_06/
├── public/
│   └── images/
│       └── react.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── Field.jsx
│   │   ├── Radio.jsx
│   │   ├── RenderCountWrapper.jsx
│   │   ├── Spoiler.jsx
│   │   └── composed/
│   │       ├── FieldGroup.jsx
│   │       ├── Header.jsx
│   │       ├── RadioSet.jsx
│   │       └── Sidebar.jsx
│   │   └── layouts/
│   │       └── TaskLayout.jsx
│   ├── constants/
│   │       └── index.js
│   ├── features/
│   │   ├── Task01/
│   │   │   ├── components/
│   │   │   ├── constants.js
│   │   │   └── index.jsx
│   │   ├── Task02/
│   │   │   ├── components/
│   │   │   ├── constants.js
│   │   │   ├── models.js
│   │   │   └── index.jsx
│   │   └── ...
│   ├── hooks/
│   │   ├── index.js
│   │   ├── useInput.js
│   │   └── useStorage.js
│   ├── models/
│   │   └── index.js
│   ├── styles/
│   │   ├── index.css
│   │   └── theme.css
│   └── utils/
│       └── index.js
├── index.html
├── package.json
├── vite.config.js
├── jsconfig.json
├── eslint.config.js
└── README.md
```
