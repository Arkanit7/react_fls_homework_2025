import {useDispatch, useSelector} from 'react-redux'
import PostsList from './PostsList'
import {POSTS_STATUS} from '@/lib/constants'
import {chooseMorePages, resetPostsState} from '@/features/posts/postsSlice'
import {useEffect, useRef} from 'react'
import {getPagePosts} from '@/features/posts/postsThunks'
import {RotateCw} from 'lucide-react'

function InfinitePosts() {
  const {posts, status, chosenPages, totalPages, postsPerPage} = useSelector(
    (state) => state.posts,
  )
  const isLoading = status === POSTS_STATUS.LOADING
  const lastLoadedPage = chosenPages.at(-1)
  const dispatch = useDispatch()
  const observableEndOfListRef = useRef()

  useEffect(() => {
    dispatch(
      getPagePosts({
        pageNumber: lastLoadedPage,
        postsPerPage,
      }),
    )
  }, [dispatch, lastLoadedPage, postsPerPage])

  useEffect(() => {
    // Cleanup function to reset state when component unmounts
    return () => dispatch(resetPostsState())
  }, [dispatch])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (isLoading || !entry.isIntersecting || lastLoadedPage >= totalPages)
          return

        dispatch(chooseMorePages(lastLoadedPage + 1))
      })
    })

    const node = observableEndOfListRef.current
    observer.observe(node)

    return () => observer.unobserve(node)
  }, [dispatch, isLoading, lastLoadedPage, totalPages])

  return (
    <>
      <PostsList posts={posts} />
      <span
        className="js-observable-end-of-the-list"
        ref={observableEndOfListRef}
      ></span>
      {isLoading && (
        <div className="loader">
          <span>
            <RotateCw />
          </span>{' '}
          Завантаження...
        </div>
      )}
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        span {
          animation: rotate 2s linear infinite;
        }

        @keyframes rotate {
          to {
            rotate: 1turn;
          }
        }
      `}</style>
    </>
  )
}

export default InfinitePosts
