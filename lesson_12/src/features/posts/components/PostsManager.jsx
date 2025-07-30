import {POSTS_STATUS} from '@/lib/constants'
import PostsList from './PostsList'
import {getPagePosts} from '@/features/posts/postsThunks'
import {useEffect, useState} from 'react'
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
  const lastLoadedPage = chosenPages.at(-1)

  useEffect(() => {
    dispatch(
      getPagePosts({
        pageNumber: lastLoadedPage,
        postsPerPage,
      }),
    )
  }, [dispatch, lastLoadedPage, postsPerPage, totalPosts])

  useEffect(() => {
    // Cleanup function to reset state when component unmounts
    return () => dispatch(resetPostsState())
  }, [dispatch])

  const [isModalOpen, setIsModalOpen] = useState(false)

  function toggleModal(shouldOpen = false) {
    setIsModalOpen(shouldOpen)
    document.body.classList.toggle('scroll-locked', shouldOpen)
  }

  return (
    <>
      <div className="flow-4">
        {isModalOpen && (
          <NewPostFormModal closeModal={() => toggleModal(false)} />
        )}

        <div className="actions">
          <ShowEntries />
          <Clickable onClick={() => toggleModal(true)}>
            <BookPlusIcon /> Створити
          </Clickable>
        </div>

        <Pagination />

        <PostsList posts={posts} />

        <div className="load-more">
          <Clickable
            onClick={() => dispatch(chooseMorePages(lastLoadedPage + 1))}
            variant="ghost"
            size="lg"
            disabled={isLoading || lastLoadedPage >= totalPages}
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
          align-items: baseline;
          justify-content: space-between;
          gap: 1ch;
          flex-wrap: wrap;
        }

        .load-more {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default PostsManager
