import Clickable from '@/components/ui/Clickable'
import Container from '@/components/ui/Container'
import Typography from '@/components/ui/Typography'
import {navigation} from '@/lib/constants'
import {Link} from 'react-router'

function NotFoundPage() {
  return (
    <>
      <Container className="flow-6">
        <Typography as="h1" className="text-center">
          404, не знайдено
        </Typography>
        <div>
          <Clickable as={Link} to={navigation.home.index} size="lg">
            На головну
          </Clickable>
        </div>
      </Container>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default NotFoundPage
