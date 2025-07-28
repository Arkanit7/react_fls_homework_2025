import Typography from '@/components/Typography'
import PostsList from '@/features/posts/components/PostsList'
import Container from '@/components/Container'

function Posts() {
  return (
    <Container className="flow-6">
      <Typography as="h1" variant="h1" className="text-center">
        Posts
      </Typography>
      <PostsList />
    </Container>
  )
}

export default Posts
