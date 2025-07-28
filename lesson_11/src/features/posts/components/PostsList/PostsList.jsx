import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from '../../postsThunk'
import {useEffect} from 'react'
import PostCard from '../PostCard'
import styles from './PostsList.module.scss'
import PostCardSkeleton from '../PostCardSkeleton'
import {POSTS_LIMIT, SKELETON_POSTS_LIMIT} from '../../constants'

function PostsList() {
  const {posts, isLoading, error} = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts(POSTS_LIMIT))
  }, [dispatch])

  if (error) return <i>{error}</i>
  if (isLoading)
    return (
      <div className={styles.list}>
        {Array.from({length: SKELETON_POSTS_LIMIT}, (_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </div>
    )

  return (
    <div className={styles.list}>
      {posts.length === 0 ? (
        <i>There are not posts yet...</i>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  )
}

export default PostsList
