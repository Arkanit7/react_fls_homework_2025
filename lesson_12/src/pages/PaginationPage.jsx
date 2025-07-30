import Container from '@/components/ui/Container'
import PostsManager from '@/features/posts/components/PostsManager'
import Typography from '@/components/ui/Typography'

function PaginationPage() {
  return (
    <Container className="flow-4">
      <Typography as="h1" className="text-center">
        Пагінація
      </Typography>
      <PostsManager />
    </Container>
  )
}

export default PaginationPage
