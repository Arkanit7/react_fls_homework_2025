import {POSTS_STATUS} from '@/lib/constants'
import PostsList from './PostsList'
import {getPagePosts} from '@/app/postsThunk'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Pagination from './Pagination'
import NewPostForm from './NewPostForm'
import {addLoadedPagesNumbers} from '@/app/postsSlice'
import ShowEntries from './ShowEntries'
import Modal from './ui/Modal'
import Clickable from './ui/Clickable'
import {BookPlusIcon, RotateCw} from 'lucide-react'

function PostsManager() {
  const {
    posts,
    postsPerPage,
    loadedPagesNumbers,
    status,
    totalPages,
    totalPosts,
  } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  const isLoading = status === POSTS_STATUS.LOADING
  const lastLoadedPage = loadedPagesNumbers.at(-1)

  useEffect(() => {
    dispatch(
      getPagePosts({
        pageNumber: lastLoadedPage,
        postsPerPage,
      }),
    )
  }, [dispatch, lastLoadedPage, postsPerPage, totalPosts])

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flow-4">
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <NewPostForm />
          </Modal>
        )}

        <div className="actions">
          <ShowEntries />
          <Clickable onClick={() => setIsModalOpen(true)}>
            <BookPlusIcon /> Створити
          </Clickable>
        </div>

        <Pagination />

        <PostsList posts={posts} />

        <div className="load-more">
          <Clickable
            onClick={() => dispatch(addLoadedPagesNumbers(lastLoadedPage + 1))}
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
