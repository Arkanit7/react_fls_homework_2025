import Clickable from '@/components/Clickable'
import Container from '@/components/Container'
import Typography from '@/components/Typography'
import {Link} from 'react-router'
import styles from './NotFoundPage.module.scss'

function NotFoundPage() {
  return (
    <Container className="flow-4">
      <Typography as="h1" variant="h1" className="text-center">
        404 Not found
      </Typography>
      <div className={styles.actions}>
        <Clickable as={Link} to="/">
          Go to the home page
        </Clickable>
      </div>
    </Container>
  )
}

export default NotFoundPage
