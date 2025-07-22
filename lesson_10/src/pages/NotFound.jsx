import Clickable from '@/components/ui/Clickable'
import Typography from '@/components/ui/Typography'
import Container from '@/components/Container'
import {Link} from 'react-router'

function NotFound() {
  return (
    <Container className="space-y-4 text-center">
      <h1>
        <div className="text-8xl font-light text-muted-foreground">404</div>
        <Typography as="span" variant="subtitle">
          Сторінку не знайдено
        </Typography>
      </h1>
      <Clickable as={Link} size="lg" to="/">
        На головну
      </Clickable>
    </Container>
  )
}

export default NotFound
