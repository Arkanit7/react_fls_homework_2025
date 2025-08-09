import {useGetInfinitePostsInfiniteQuery} from '../postsApi'
import PostPreview from './PostPreview'
import Typography from '@/components/ui/Typography'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import Loader from '@/components/ui/Loader'

function InfiniteList({setSelectedId}) {
  const {data, isLoading, isError, hasNextPage, fetchNextPage} =
    useGetInfinitePostsInfiniteQuery({
      page: 1,
      limit: 3,
    })

  const [observableEndOfListRef, entry] = useIntersectionObserver({
    threshold: 0,
  })

  if (entry?.isIntersecting) fetchNextPage()

  if (isLoading) return <Loader />
  if (isError) return <Typography variant="muted">Помилка</Typography>

  const listPosts = data.pages.flatMap(({items}) => items)

  return (
    <>
      <div className="flow-4" role="feed">
        <div className="flow-2">
          {listPosts.map((post) => (
            <PostPreview
              key={post.id}
              post={post}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
        {hasNextPage && <Loader ref={observableEndOfListRef} />}
      </div>
    </>
  )
}

export default InfiniteList
