import {useState} from 'react'
import {useListPostsQuery} from '../postsApi'
import Pagination from './Pagination'
import PostPreview from './PostPreview'
import Typography from '@/components/ui/Typography'
import Loader from '@/components/ui/Loader'

function PaginatedList({setSelectedId}) {
  const [currentPage, setCurrentPage] = useState(1)
  const {
    data: {items: listPosts, totalPages} = {},
    isLoading,
    isFetching,
    isError,
  } = useListPostsQuery({
    page: currentPage,
  })

  if (isLoading) return <Loader />
  if (isError) return <Typography variant="muted">Помилка</Typography>

  const isFirstPage = currentPage <= 1
  const isEmptyPage = listPosts.length === 0

  if (isEmptyPage && !isFirstPage) setCurrentPage((p) => p - 1)

  return (
    <div className="flow-3">
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        isFetching={isFetching}
      />
      <div className="flow-2">
        {listPosts.map((post) => (
          <PostPreview
            key={post.id}
            post={post}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        isFetching={isFetching}
      />
    </div>
  )
}

export default PaginatedList
