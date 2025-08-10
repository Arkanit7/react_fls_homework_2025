# EMR — Electronic Medical Records Dashboard

This project is a modern, full-featured React-based dashboard for managing patients, doctors, and appointments in a medical clinic. It uses Vite, DaisyUI, Tailwind CSS, and Redux Toolkit Query for a fast, beautiful, and maintainable experience.

## Features

- 🏥 Manage patients, doctors, and appointments
- 📊 Dashboard with live statistics
- 🔍 Search, filter, and paginate data
- 🖥️ Responsive, mobile-friendly UI
- 🎨 Theme support (DaisyUI, dark/light toggle)
- ⚡ Fast development with Vite
- 🔄 Real-time data fetching with RTK Query
- 🛡️ Secure and accessible

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- Bun (or npm/yarn)

### Installation

```bash
# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start the dev server
bun run dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
bun run build
# or
npm run build
```

## Project Structure

- `src/pages/` — Main app pages (Dashboard, Patients, Doctors, Appointments)
- `src/components/` — Reusable UI components
- `src/app/` — API and state management
- `src/styles/` — Tailwind and custom CSS
- `src/assets/` — Images and static assets

## Customization

- Edit themes in `tailwind.config.js` and DaisyUI settings
- Add new pages or features in `src/pages/`
- Update API endpoints in `src/app/api.js`

## Credits

- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)

## License

MIT
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
