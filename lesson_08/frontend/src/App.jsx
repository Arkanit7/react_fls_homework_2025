import AppRoutes from './routes/AppRoutes'
import {Toaster} from 'sonner'

function App() {
  return (
    <>
      <Toaster
        theme="dark"
        richColors
        closeButton
        position="top-right"
        offset={{
          top: 'calc(var(--spacing) * 20)',
          right: 'calc(var(--spacing) * 4)',
        }}
        toastOptions={{
          classNames: {
            success: '!bg-green-400 !text-secondary-300 !border-secondary-300',
            error: '!bg-red-400 !text-secondary-300 !border-secondary-300',
          },
        }}
      />
      <AppRoutes />
    </>
  )
}

export default App
