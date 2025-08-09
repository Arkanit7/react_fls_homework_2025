import router from './router'
import {RouterProvider} from 'react-router'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {api} from './api/api'

function App() {
  return (
    <ApiProvider api={api}>
      <RouterProvider router={router} />
    </ApiProvider>
  )
}

export default App
