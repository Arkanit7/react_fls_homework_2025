import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from '../postsThunk'
import {useEffect} from 'react'
import PostCard from './PostCard'

function PostsList() {
  const {posts, isLoading, error} = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts(20))
  }, [dispatch])

  if (error) return <i>{error}</i>
  if (isLoading) return <i>Loading...</i>

  return (
    <div>
      <button onClick={() => dispatch(fetchPosts(20))}>get</button>
      {posts.length === 0 ? (
        <i>There are not posts yet...</i>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  )
}

export default PostsList
