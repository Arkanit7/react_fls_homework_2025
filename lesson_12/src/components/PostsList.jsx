import PostPreview from './PostPreview'

function PostsList({posts}) {
  return (
    <>
      <div className="flow-4">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default PostsList
