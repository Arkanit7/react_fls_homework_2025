import {POSTS_STATUS} from '@/lib/constants'
import PostsList from './PostsList'
import {getPagePosts} from '@/features/posts/postsThunks'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Pagination from './Pagination'
import NewPostFormModal from './NewPostFormModal'
import {chooseMorePages, resetPostsState} from '@/features/posts/postsSlice'
import ShowEntries from './ShowEntries'
import Clickable from '../../../components/ui/Clickable'
import {BookPlusIcon, RotateCw} from 'lucide-react'

function PostsManager() {
  const {posts, postsPerPage, chosenPages, status, totalPages, totalPosts} =
    useSelector((state) => state.posts)
  const dispatch = useDispatch()

  const isLoading = status === POSTS_STATUS.LOADING
  const lastChosenPage = chosenPages.at(-1)

  useEffect(() => {
    dispatch(
      getPagePosts({
        pageNumber: lastChosenPage,
        postsPerPage,
      }),
    )
  }, [dispatch, lastChosenPage, postsPerPage, totalPosts])

  useEffect(() => {
    // Cleanup function to reset state when component unmounts
    return () => dispatch(resetPostsState())
  }, [dispatch])

  return (
    <>
      <div className="flow-4">
        <div className="actions">
          <ShowEntries />
          <NewPostFormModal />
        </div>

        <Pagination />

        <PostsList posts={posts} />

        <div className="load-more">
          <Clickable
            onClick={() => dispatch(chooseMorePages(lastChosenPage + 1))}
            variant="ghost"
            size="lg"
            disabled={isLoading || lastChosenPage >= totalPages}
          >
            <RotateCw />
            {isLoading ? 'Завантаження...' : 'Завантажити ще'}
          </Clickable>
        </div>

        <Pagination />
      </div>
      <style jsx global>
        {`
          .scroll-locked {
            overflow: hidden;
          }
        `}
      </style>
      <style jsx>{`
        .actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .load-more {
          display: flex;
          justify-content: center;
        }

        @media (width < 30rem) {
          .load-more :global(button) {
            inline-size: 100%;
          }
        }

        @media (width >= 30rem) {
          .actions {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 0.375rem;
          }
        }
      `}</style>
    </>
  )
}

export default PostsManager
