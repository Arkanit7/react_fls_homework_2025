import {createBrowserRouter, RouterProvider} from 'react-router'
import routes from './app/routes'
import {Toaster} from 'sonner'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {postsApi} from './features/posts/postsApi'

const router = createBrowserRouter(routes)

function App() {
  return (
    <ApiProvider api={postsApi}>
      <Toaster
        position="top-right"
        offset={{top: '4rem', right: '0.75rem'}}
        theme="dark"
      />
      <RouterProvider router={router} />
    </ApiProvider>
  )
}

export default App
