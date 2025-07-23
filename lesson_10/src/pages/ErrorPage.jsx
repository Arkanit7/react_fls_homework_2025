import Clickable from '@/components/ui/Clickable'
import Container from '@/components/Container'
import {isRouteErrorResponse, Link, useRouteError} from 'react-router'
import Typography from '@/components/ui/Typography'

function ErrorDescription() {
  const error = useRouteError()

  if (isRouteErrorResponse(error))
    return (
      <>
        <h1 className="text-center text-8xl font-light text-muted-foreground">
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    )

  if (error instanceof Error)
    return (
      <>
        <h1 className="text-center text-8xl font-light text-muted-foreground">
          Помилка!
        </h1>
        <p className="text-center text-lg text-destructive underline decoration-dashed">
          {error.message}
        </p>
        <Typography className="text-center" as="h2" variant="subtitle">
          Стек:
        </Typography>
        <pre className="overflow-auto rounded-lg bg-secondary px-3 py-4">
          <code>{error.stack}</code>
        </pre>
      </>
    )

  return <h1>Unknown Error</h1>
}

function ErrorPage() {
  return (
    <Container className="space-y-4">
      <ErrorDescription />
      <div className="flex justify-center">
        <Clickable as={Link} size="lg" to="/">
          На головну
        </Clickable>
      </div>
    </Container>
  )
}

export default ErrorPage
