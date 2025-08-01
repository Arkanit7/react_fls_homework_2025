import {chooseMorePages, resetPostsState} from '@/features/posts/postsSlice'
import {getPagePosts} from '@/features/posts/postsThunks'
import {POSTS_STATUS} from '@/lib/constants'
import {RotateCw} from 'lucide-react'
import {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PostsList from './PostsList'
import ShowEntries from './ShowEntries'
import NewPostFormModal from './NewPostFormModal'

function InfinitePosts() {
  const {posts, status, chosenPages, totalPages, postsPerPage} = useSelector(
    (state) => state.posts,
  )
  const isLoading = status === POSTS_STATUS.LOADING
  const lastChosenPage = chosenPages.at(-1)
  const dispatch = useDispatch()

  const observableEndListRef = useRef()

  useEffect(() => {
    dispatch(
      getPagePosts({
        pageNumber: lastChosenPage,
        postsPerPage,
      }),
    )
  }, [dispatch, lastChosenPage, postsPerPage])

  useEffect(() => {
    // Cleanup function to reset state when component unmounts
    return () => dispatch(resetPostsState())
  }, [dispatch])

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) =>
      entries.forEach((entry) => {
        if (isLoading || !entry.isIntersecting) return

        if (lastChosenPage >= totalPages) observer.disconnect()
        else dispatch(chooseMorePages(lastChosenPage + 1))
      }),
    )

    observer.observe(observableEndListRef.current)

    return () => observer.disconnect()
  }, [dispatch, isLoading, lastChosenPage, totalPages])

  return (
    <>
      <div className="actions">
        <ShowEntries />
        <NewPostFormModal />
      </div>

      <PostsList posts={posts} />
      <span ref={observableEndListRef}></span>
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

        .actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        @media (width >= 30rem) {
          .actions {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 0.375rem;
          }
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
