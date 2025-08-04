import Container from '@/components/ui/Container'
import Typography from '@/components/ui/Typography'
import InfiniteList from '@/features/posts/components/InfiniteList'
import PostAddAndDetails from '@/features/posts/components/PostAddAndDetails'
import {useState} from 'react'

function InfiniteScrollingPage() {
  const [selectedId, setSelectedId] = useState()

  return (
    <>
      <Container className="flow-6">
        <Typography as="h1" className="text-center">
          Нескінченна прокрутка
        </Typography>
        <PostAddAndDetails
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <InfiniteList selectedId={selectedId} setSelectedId={setSelectedId} />
      </Container>
    </>
  )
}

export default InfiniteScrollingPage
