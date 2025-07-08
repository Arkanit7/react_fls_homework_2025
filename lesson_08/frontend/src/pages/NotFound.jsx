import Clickable from '@/components/Clickable'
import Container from '@/components/Container'
import Typography from '@/components/Typography'
import frontNavigation from '@/routes/frontNavigation'
import {Link} from 'react-router'

function NotFound() {
  return (
    <Container className="grid min-h-dvh place-content-center gap-4 text-center">
      <p className="text-6xl font-bold">404</p>
      <Typography as="h1">Сторінку не знайдено</Typography>
      <Clickable as={Link} to={frontNavigation.home}>
        На головну
      </Clickable>
    </Container>
  )
}

export default NotFound
