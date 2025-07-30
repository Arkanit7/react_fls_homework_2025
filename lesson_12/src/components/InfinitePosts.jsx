import {useDispatch, useSelector} from 'react-redux'
import PostsList from './PostsList'
import {POSTS_STATUS, REQUEST_RETRY_DELAY} from '@/lib/constants'
import {addLoadedPagesNumbers} from '@/app/postsSlice'
import {useEffect, useLayoutEffect, useRef} from 'react'
import {getPagePosts} from '@/app/postsThunk'
import {RotateCw} from 'lucide-react'
import {toast} from 'sonner'

function InfinitePosts() {
  const {posts, status, loadedPagesNumbers, totalPages, postsPerPage} =
    useSelector((state) => state.posts)
  const isLoading = status === POSTS_STATUS.LOADING
  const hasError = status === POSTS_STATUS.ERROR
  const lastLoadedPage = loadedPagesNumbers.at(-1)
  const dispatch = useDispatch()
  const observableEndOfList = useRef()

  useEffect(() => {
    let timeoutId

    async function fetchPosts() {
      const response = await dispatch(
        getPagePosts({
          pageNumber: lastLoadedPage,
          postsPerPage,
        }),
      )

      if (response.meta.requestStatus !== 'rejected') return

      toast.error(response.payload)

      timeoutId = setTimeout(() => fetchPosts(), REQUEST_RETRY_DELAY)
    }

    fetchPosts()

    return () => timeoutId && clearTimeout(timeoutId)
  }, [dispatch, lastLoadedPage, postsPerPage])

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          isLoading ||
          hasError ||
          !entry.isIntersecting ||
          lastLoadedPage >= totalPages
        )
          return

        dispatch(addLoadedPagesNumbers(lastLoadedPage + 1))
      })
    })

    const node = observableEndOfList.current
    observer.observe(node)

    return () => observer.unobserve(node)
  }, [dispatch, isLoading, lastLoadedPage, totalPages, hasError])

  return (
    <>
      <PostsList posts={posts} />
      <span
        className="js-observable-end-of-the-list"
        ref={observableEndOfList}
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
