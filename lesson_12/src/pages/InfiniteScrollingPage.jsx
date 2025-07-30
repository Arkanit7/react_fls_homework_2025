import Container from '@/components/ui/Container'
import InfinitePosts from '@/components/InfinitePosts'
import Typography from '@/components/ui/Typography'

function PaginationPage() {
  return (
    <Container className="flow-4">
      <Typography as="h1" className="text-center">
        Нескінченна прокрутка
      </Typography>
      <InfinitePosts />
    </Container>
  )
}

export default PaginationPage
