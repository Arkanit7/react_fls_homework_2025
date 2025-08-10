import {Container, Typography} from '@/components/ui'
import {navigationRoutes} from '@/router/navigation'
import {Link} from 'react-router'

function NotFoundPage() {
  return (
    <Container className="grid min-h-full justify-items-center gap-8">
      <Typography variant="h1" className="text-center text-warning-content">
        Упс, такої сторінки не існує...
      </Typography>
      <Link className="btn btn-primary" to={navigationRoutes.dashboard}>
        На головну сторінку
      </Link>
    </Container>
  )
}

export default NotFoundPage
