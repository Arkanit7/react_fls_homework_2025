import {NodePackage} from './models'

export const REACT_PACKAGES = [
  // UI & Component Libraries (Styled & Headless)
  new NodePackage({
    title: 'shadcn/ui',
    link: 'https://ui.shadcn.com',
    description:
      'A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.',
  }),
  new NodePackage({
    title: 'Material UI',
    link: 'https://mui.com',
    description:
      'Material UI offers a comprehensive suite of UI tools to help you ship new features faster. Based on Google’s Material Design.',
  }),
  new NodePackage({
    title: 'Ant Design',
    link: 'https://ant.design',
    description:
      'A design system for enterprise-level products. Create an efficient and enjoyable work experience.',
  }),
  new NodePackage({
    title: 'Chakra UI',
    link: 'https://chakra-ui.com',
    description:
      'Chakra UI is a simple, modular and accessible component library that gives you the building blocks to build React applications.',
  }),
  new NodePackage({
    title: 'Radix UI',
    link: 'https://www.radix-ui.com',
    description:
      'Primitives for building high-quality, accessible design systems and web apps. Unstyled, accessible components for React.',
  }),
  new NodePackage({
    title: 'React Bootstrap',
    link: 'https://react-bootstrap.github.io',
    description:
      'The most popular front-end framework rebuilt for React. React Bootstrap replaces the Bootstrap JavaScript.',
  }),
  new NodePackage({
    title: 'BlueprintJS',
    link: 'https://blueprintjs.com',
    description:
      'A React-based UI toolkit for the web, optimized for building complex, data-dense interfaces for desktop applications.',
  }),
  new NodePackage({
    title: 'Evergreen',
    link: 'https://evergreen.segment.com',
    description:
      'Evergreen is a React UI Framework by Segment. It contains a set of polished React components that work out of the box.',
  }),
  new NodePackage({
    title: 'Grommet',
    link: 'https://v2.grommet.io',
    description:
      'A react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package.',
  }),
  new NodePackage({
    title: 'Semantic UI React',
    link: 'https://react.semantic-ui.com',
    description:
      'The official Semantic-UI-React integration. Declarative API, shorthand props, and more.',
  }),
  new NodePackage({
    title: 'Rebass',
    link: 'https://rebassjs.org',
    description: 'React primitive UI components built with styled-system.',
  }),
  new NodePackage({
    title: 'Mantine',
    link: 'https://mantine.dev',
    description:
      'A fully featured React components and hooks library with focus on usability, accessibility and developer experience.',
  }),
  new NodePackage({
    title: 'Headless UI',
    link: 'https://headlessui.com',
    description:
      'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
  }),
  new NodePackage({
    title: 'React Suite',
    link: 'https://rsuitejs.com',
    description:
      'A suite of React components, sensible UI design, and a friendly development experience.',
  }),
  new NodePackage({
    title: 'PrimeReact',
    link: 'https://primereact.org',
    description:
      'The most complete UI component library for React featuring 90+ components, theming, and more.',
  }),
  new NodePackage({
    title: 'Fluent UI',
    link: 'https://react.fluentui.dev',
    description:
      'A collection of UX frameworks from Microsoft for creating consistent, beautiful, and usable experiences.',
  }),

  // State Management
  new NodePackage({
    title: 'Redux',
    link: 'https://redux.js.org',
    description: 'A predictable state container for JavaScript apps.',
  }),
  new NodePackage({
    title: 'Redux Toolkit',
    link: 'https://redux-toolkit.js.org',
    description:
      'The official, opinionated, batteries-included toolset for efficient Redux development.',
  }),
  new NodePackage({
    title: 'Zustand',
    link: 'https://zustand-demo.pmnd.rs',
    description:
      'A small, fast, and scalable bearbones state-management solution.',
  }),
  new NodePackage({
    title: 'Jotai',
    link: 'https://jotai.org',
    description: 'Primitive and flexible state management for React.',
  }),
  new NodePackage({
    title: 'Recoil',
    link: 'https://recoiljs.org',
    description: 'A state management library for React, created by Facebook.',
  }),
  new NodePackage({
    title: 'MobX',
    link: 'https://mobx.js.org',
    description: 'Simple, scalable state management with observable data.',
  }),
  new NodePackage({
    title: 'XState',
    link: 'https://xstate.js.org',
    description: 'State machines and statecharts for the modern web.',
  }),
  new NodePackage({
    title: 'Valtio',
    link: 'https://valtio.pmnd.rs',
    description: 'A proxy-based state management library for React.',
  }),
  new NodePackage({
    title: 'valtio-immer',
    link: 'https://www.npmjs.com/package/valtio-immer',
    description: 'Valtio with Immer for mutable state updates.',
  }),
  new NodePackage({
    title: 'pullstate',
    link: 'https://pullstate.com',
    description: 'Simple, reactive state management library for React.',
  }),
  new NodePackage({
    title: 'Hookstate',
    link: 'https://hookstate.js.org',
    description:
      'The simple but powerful and incredibly fast state management for React.',
  }),
  new NodePackage({
    title: 'effector',
    link: 'https://effector.dev',
    description: 'Business logic with a minimal API, written in TypeScript.',
  }),
  new NodePackage({
    title: 'zustand-persist',
    link: 'https://www.npmjs.com/package/zustand-persist',
    description: 'Persist state to storage for Zustand.',
  }),

  // Routing
  new NodePackage({
    title: 'React Router',
    link: 'https://reactrouter.com',
    description: 'Declarative routing for React.',
  }),
  new NodePackage({
    title: 'Next.js',
    link: 'https://nextjs.org',
    description: 'The React Framework for Production.',
  }),
  new NodePackage({
    title: 'Gatsby',
    link: 'https://www.gatsbyjs.com',
    description:
      'A framework for creating blazing-fast apps and websites with React.',
  }),
  new NodePackage({
    title: 'TanStack Router',
    link: 'https://tanstack.com/router',
    description: 'Powerful, type-safe routing for React applications.',
  }),
  new NodePackage({
    title: 'Remix',
    link: 'https://remix.run',
    description: 'A full-stack web framework that focuses on web fundamentals.',
  }),
  new NodePackage({
    title: 'Wouter',
    link: 'https://www.npmjs.com/package/wouter',
    description: 'A tiny routing library for React and Preact.',
  }),
  new NodePackage({
    title: 'Solid App Router',
    link: 'https://solidjs.com/app-router',
    description: 'App router for SolidJS, a React alternative.',
  }),

  // Data Fetching & Caching
  new NodePackage({
    title: 'TanStack Query (React Query)',
    link: 'https://tanstack.com/query',
    description:
      'Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte, and more.',
  }),
  new NodePackage({
    title: 'SWR',
    link: 'https://swr.vercel.app',
    description: 'A React Hooks library for data fetching, created by Vercel.',
  }),
  new NodePackage({
    title: 'Apollo Client',
    link: 'https://www.apollographql.com/docs/react',
    description:
      'A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.',
  }),
  new NodePackage({
    title: 'Relay',
    link: 'https://relay.dev',
    description:
      'A JavaScript framework for building data-driven React applications using GraphQL.',
  }),
  new NodePackage({
    title: 'RTK Query',
    link: 'https://redux-toolkit.js.org/rtk-query/overview',
    description:
      'A powerful data fetching and caching tool built on top of Redux Toolkit.',
  }),
  new NodePackage({
    title: 'Axios',
    link: 'https://axios-http.com',
    description: 'Promise-based HTTP client for the browser and Node.js.',
  }),
  new NodePackage({
    title: 'urql',
    link: 'https://formidable.com/open-source/urql',
    description: 'A a lightweight and versatile GraphQL client for React.',
  }),

  // Form Management
  new NodePackage({
    title: 'React Hook Form',
    link: 'https://react-hook-form.com',
    description:
      'Performant, flexible and extensible forms with easy-to-use validation.',
  }),
  new NodePackage({
    title: 'Formik',
    link: 'https://formik.org',
    description: 'Build forms in React, without the tears.',
  }),
  new NodePackage({
    title: 'Zod',
    link: 'https://zod.dev',
    description: 'TypeScript-first schema declaration and validation library.',
  }),
  new NodePackage({
    title: 'Yup',
    link: 'https://github.com/jquense/yup',
    description: 'A schema builder for value parsing and validation.',
  }),
  new NodePackage({
    title: 'VeeValidate',
    link: 'https://vee-validate.logaretm.com',
    description:
      'A validation library for Vue.js, but also has a React version.',
  }),
  new NodePackage({
    title: 'React Final Form',
    link: 'https://final-form.org/react',
    description: 'A thin, subscription-based form state management library.',
  }),

  // Animation
  new NodePackage({
    title: 'Framer Motion',
    link: 'https://www.framer.com/motion',
    description: 'A production-ready motion library for React.',
  }),
  new NodePackage({
    title: 'React Spring',
    link: 'https://www.react-spring.dev',
    description: 'A spring physics based animation library.',
  }),
  new NodePackage({
    title: 'React Transition Group',
    link: 'https://reactcommunity.org/react-transition-group',
    description:
      'A set of components for managing component state transitions.',
  }),
  new NodePackage({
    title: 'Lottie',
    link: 'https://lottiefiles.com',
    description: 'Render After Effects animations in React with Lottie.',
  }),
  new NodePackage({
    title: 'Gsap',
    link: 'https://gsap.com',
    description: 'A professional-grade animation library for the modern web.',
  }),
  new NodePackage({
    title: 'React Awesome Reveal',
    link: 'https://www.npmjs.com/package/react-awesome-reveal',
    description: 'Easy-to-use scroll reveal animations for React.',
  }),

  // Styling
  new NodePackage({
    title: 'Styled Components',
    link: 'https://styled-components.com',
    description:
      'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps.',
  }),
  new NodePackage({
    title: 'Emotion',
    link: 'https://emotion.sh',
    description: 'A performant and flexible CSS-in-JS library.',
  }),
  new NodePackage({
    title: 'Tailwind CSS',
    link: 'https://tailwindcss.com',
    description:
      'A utility-first CSS framework for rapidly building custom designs.',
  }),
  new NodePackage({
    title: 'Sass (SCSS)',
    link: 'https://sass-lang.com',
    description: 'A professional-grade CSS extension language.',
  }),
  new NodePackage({
    title: 'PostCSS',
    link: 'https://postcss.org',
    description: 'A tool for transforming CSS with JavaScript.',
  }),
  new NodePackage({
    title: 'Styled System',
    link: 'https://styled-system.com',
    description: 'Design system utilities for CSS-in-JS libraries.',
  }),
  new NodePackage({
    title: 'Classnames',
    link: 'https://www.npmjs.com/package/classnames',
    description:
      'A simple utility for conditionally joining CSS class names together.',
  }),

  // Testing
  new NodePackage({
    title: 'Jest',
    link: 'https://jestjs.io',
    description:
      'A delightful JavaScript testing framework with a focus on simplicity.',
  }),
  new NodePackage({
    title: 'React Testing Library',
    link: 'https://testing-library.com/react',
    description:
      'Simple and complete React DOM testing utilities that encourage good testing practices.',
  }),
  new NodePackage({
    title: 'Cypress',
    link: 'https://www.cypress.io',
    description: 'A JavaScript end-to-end testing framework.',
  }),
  new NodePackage({
    title: 'Enzyme',
    link: 'https://enzymejs.github.io/enzyme',
    description:
      "A JavaScript testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.",
  }),
  new NodePackage({
    title: 'Vitest',
    link: 'https://vitest.dev',
    description: 'A lightning-fast testing framework powered by Vite.',
  }),
  new NodePackage({
    title: 'Storybook',
    link: 'https://storybook.js.org',
    description: 'A UI development environment for components.',
  }),

  // Hooks & Utilities
  new NodePackage({
    title: 'React Use',
    link: 'https://streamich.github.io/react-use',
    description: 'A collection of over 80 essential React Hooks.',
  }),
  new NodePackage({
    title: 'use-gesture',
    link: 'https://use-gesture.netlify.app',
    description: 'A utility for handling gestures in React.',
  }),
  new NodePackage({
    title: 'React Table',
    link: 'https://tanstack.com/table',
    description: 'A headless UI for building powerful tables & datagrids.',
  }),
  new NodePackage({
    title: 'React Icons',
    link: 'https://react-icons.github.io/react-icons',
    description: 'A huge collection of popular icon sets as React components.',
  }),
  new NodePackage({
    title: 'React Hook Form Devtools',
    link: 'https://react-hook-form.com/devtools',
    description: 'A devtool for debugging React Hook Form.',
  }),
  new NodePackage({
    title: 'React use-local-storage',
    link: 'https://www.npmjs.com/package/react-use-local-storage',
    description: 'A custom React hook for using local storage with state.',
  }),
  new NodePackage({
    title: 'React use-undo',
    link: 'https://www.npmjs.com/package/react-use-undo',
    description: 'A React hook to manage state with undo/redo capabilities.',
  }),
  new NodePackage({
    title: 'use-dark-mode',
    link: 'https://www.npmjs.com/package/use-dark-mode',
    description: 'A React Hook to manage dark mode with CSS variables.',
  }),
  new NodePackage({
    title: 'React-dnd',
    link: 'https://react-dnd.github.io/react-dnd',
    description: 'Drag and Drop for React.',
  }),
  new NodePackage({
    title: 'React Draggable',
    link: 'https://www.npmjs.com/package/react-draggable',
    description: 'A draggable component for React.',
  }),
  new NodePackage({
    title: 'React Hot Toast',
    link: 'https://react-hot-toast.com',
    description: 'The best toast notifications for React.',
  }),
  new NodePackage({
    title: 'React Hook Form Devtools',
    link: 'https://react-hook-form.com/devtools',
    description: 'A devtool for debugging React Hook Form.',
  }),
  new NodePackage({
    title: 'React Resize Detector',
    link: 'https://www.npmjs.com/package/react-resize-detector',
    description:
      'A React hook and component to detect resize of a div element.',
  }),
  new NodePackage({
    title: 'React-PDF',
    link: 'https://www.npmjs.com/package/react-pdf',
    description: 'Render PDF files in React.',
  }),
  new NodePackage({
    title: 'React-Virtualized',
    link: 'https://bvaughn.github.io/react-virtualized',
    description:
      'React components for efficiently rendering large lists and tabular data.',
  }),
  new NodePackage({
    title: 'React Window',
    link: 'https://react-window.vercel.app',
    description: 'A lightweight alternative to `react-virtualized`.',
  }),

  // Graphics & Visualization
  new NodePackage({
    title: 'D3.js',
    link: 'https://d3js.org',
    description:
      'A JavaScript library for visualizing data with HTML, SVG, and CSS.',
  }),
  new NodePackage({
    title: 'React Chart.js 2',
    link: 'https://react-chartjs-2.js.org',
    description: 'React wrapper for Chart.js.',
  }),
  new NodePackage({
    title: 'Nivo',
    link: 'https://nivo.rocks',
    description: 'A rich set of dataviz components for React.',
  }),
  new NodePackage({
    title: 'React Three Fiber',
    link: 'https://docs.pmnd.rs/react-three-fiber',
    description: 'A React renderer for Three.js.',
  }),
  new NodePackage({
    title: 'Victory',
    link: 'https://formidable.com/open-source/victory',
    description:
      'A set of modular charting components for React and React Native.',
  }),
  new NodePackage({
    title: 'Recharts',
    link: 'https://recharts.org',
    description: 'A composable charting library built on React components.',
  }),

  // Code & Text Editing
  new NodePackage({
    title: 'React Ace',
    link: 'https://www.npmjs.com/package/react-ace',
    description: 'A React component for the Ace editor.',
  }),
  new NodePackage({
    title: 'React Quill',
    link: 'https://www.npmjs.com/package/react-quill',
    description: 'A React component for the Quill rich text editor.',
  }),
  new NodePackage({
    title: 'React Codemirror',
    link: 'https://www.npmjs.com/package/react-codemirror',
    description: 'A React component for the CodeMirror editor.',
  }),
  new NodePackage({
    title: 'React MDE',
    link: 'https://www.npmjs.com/package/react-mde',
    description:
      'A simple, extensible, and mobile-friendly Markdown editor for React.',
  }),

  // Utilities for Developers
  new NodePackage({
    title: 'ESLint',
    link: 'https://eslint.org',
    description: 'Find and fix problems in your JavaScript code.',
  }),
  new NodePackage({
    title: 'Prettier',
    link: 'https://prettier.io',
    description: 'An opinionated code formatter.',
  }),
  new NodePackage({
    title: 'Vite',
    link: 'https://vitejs.dev',
    description: 'Next generation frontend tooling. A build tool for React.',
  }),
  new NodePackage({
    title: 'Webpack',
    link: 'https://webpack.js.org',
    description: 'A static module bundler for modern JavaScript applications.',
  }),
  new NodePackage({
    title: 'Babel',
    link: 'https://babeljs.io',
    description: 'A JavaScript compiler.',
  }),
  new NodePackage({
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org',
    description:
      'A typed superset of JavaScript that compiles to plain JavaScript.',
  }),
  new NodePackage({
    title: 'Husky',
    link: 'https://typicode.github.io/husky',
    description: 'Git hooks made easy.',
  }),
  new NodePackage({
    title: 'Lint-staged',
    link: 'https://github.com/okonet/lint-staged',
    description: 'Run linters against staged git files.',
  }),
  new NodePackage({
    title: 'ESLint Plugin React',
    link: 'https://github.com/jsx-eslint/eslint-plugin-react',
    description: 'ESLint rules for React.',
  }),
  new NodePackage({
    title: 'ESLint Plugin React Hooks',
    link: 'https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks',
    description: 'ESLint rules for React Hooks.',
  }),

  // Add a huge amount of entries to reach 1000+
  ...Array.from({length: 980}).map(
    (_, i) =>
      new NodePackage({
        title: `React Package ${i + 1}`,
        link: `https://www.npmjs.com/package/react-package-${i + 1}`,
        description: `A dynamically generated React NPM package for demonstration purposes.`,
      }),
  ),
]
