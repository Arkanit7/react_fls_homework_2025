import {removePost} from '@/features/posts/postsThunks'
import clsx from 'clsx'
import {useDispatch} from 'react-redux'
import Clickable from '../../../components/ui/Clickable'
import {toast} from 'sonner'

const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
  dateStyle: 'medium',
})

function PostPreview({post}) {
  const creationDate = Date.parse(post.createdAt)
  const dispatch = useDispatch()

  async function handlePostRemoval() {
    const {meta, payload} = await dispatch(removePost(post.id))

    if (meta.requestStatus === 'fulfilled') toast.success(payload.message)
    else if (meta.requestStatus === 'rejected') toast.error(payload)
  }

  return (
    <>
      <article className={clsx('post', post.isPending && 'is-pending')}>
        <header className="post-header">
          <div className="post-meta">
            <div className="post-avatar" aria-hidden="true">
              {post.authorId[0].toUpperCase()}
            </div>
            <div className="post-meta-info">
              <address className="post-author">{post.authorId}</address>
              <time className="post-date" dateTime={post.createdAt}>
                {dateFormatter.format(creationDate)}
              </time>
            </div>
          </div>
          <h2 className="post-title">{post.title}</h2>
        </header>
        <p className="post-body">{post.body}</p>
        <footer className="post-footer">
          <div className="post-reactions">
            <span className="post-likes" title="Уподобайки">
              👍 {post.likesNumber}
            </span>
            <span className="post-dislikes" title="Не подобається">
              👎 {post.dislikesNumber}
            </span>
          </div>
          <Clickable onClick={handlePostRemoval}>Видалити</Clickable>
        </footer>
      </article>
      <style jsx>{`
        .post {
          background-color: var(--card);
          color: var(--card-foreground);
          padding: 1.7rem 0.75rem 1.2rem;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .post > * + * {
          margin-block-start: 1rem;
        }

        @media (width < 24rem) {
          .post {
            margin-inline: calc(var(--container-padding) * (-1));
            border-radius: unset;
          }
        }

        @media (width >= 24rem) {
          .post {
            padding-inline: 1.5rem;
          }
        }

        .post-header {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .post-meta {
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }

        .post-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: linear-gradient(45deg, #e0e7ff 0%, #fbc2eb 100%);
          color: #333;
          display: grid;
          place-items: center;
          font-size: 1.3rem;
          font-weight: 700;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
        }

        .post-meta-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .post-author {
          font-style: normal;
          font-weight: 500;
          color: var(--muted-foreground, #888);
        }

        .post-date {
          font-size: 0.92em;
          color: var(--muted-foreground, #aaa);
        }

        .post-title {
          font-size: 1.45rem;
          font-weight: 700;
          margin: 0;
          margin-block-start: 0.2rem;
        }

        .post-body {
          line-height: 1.5;
        }

        .post-footer {
          display: flex;
          flex-direction: column;
          border-block-start: 1px solid var(--border);
          padding-block-start: 0.85rem;
          gap: 1rem;
        }

        .post-reactions {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        @media (width < 30rem) {
          .post-reactions {
            justify-content: center;
          }
        }

        @media (width >= 30rem) {
          .post-footer {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .post-likes,
        .post-dislikes {
          font-size: 1.125rem;
        }

        .is-pending {
          opacity: 0.5;
          pointer-events: none;
        }
      `}</style>
    </>
  )
}

export default PostPreview
