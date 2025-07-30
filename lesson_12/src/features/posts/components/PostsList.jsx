import PostPreview from './PostPreview'

function PostsList({posts}) {
  return (
    <>
      <div className="flow-4">
        {posts.length === 0 ? (
          <p>Тут поки порожньо...</p>
        ) : (
          posts.map((post) => <PostPreview key={post.id} post={post} />)
        )}
      </div>
      <style jsx>{`
        p {
          color: var(--muted-foreground);
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default PostsList
