import Container from '@/components/ui/Container'
import Typography from '@/components/ui/Typography'
import PaginatedList from '@/features/posts/components/PaginatedList'
import PostAddAndDetails from '@/features/posts/components/PostAddAndDetails'
import {useState} from 'react'

function PaginationPage() {
  const [selectedId, setSelectedId] = useState()

  return (
    <>
      <Container className="flow-6">
        <Typography as="h1" className="text-center">
          Пагінація
        </Typography>
        <div className="flow-10">
          <PostAddAndDetails
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          <PaginatedList
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
      </Container>
    </>
  )
}

export default PaginationPage
