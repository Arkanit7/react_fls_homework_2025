import Typography from '@/components/ui/Typography'
import {
  useDeletePostByIdMutation,
  useGetPostByIdQuery,
  useReactToPostByIdMutation,
} from '../postsApi'
import Clickable from '@/components/ui/Clickable'
import {Link} from 'react-router'
import {navigation} from '@/lib/constants'
import {toast} from 'sonner'
import {POST_REACTION} from '../constants'
import Loader from '@/components/ui/Loader'
import {Pencil, Shredder, ThumbsDown, ThumbsUp} from 'lucide-react'

const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
  dateStyle: 'full',
  timeStyle: 'long',
})

function PostDetails({id, setId}) {
  const {data: post, isLoading, isError} = useGetPostByIdQuery(id)
  const [deletePostById] = useDeletePostByIdMutation()
  const [reactToPostById, {isLoading: isReacting}] =
    useReactToPostByIdMutation()

  function likePost() {
    reactToPostById({id: post.id, reaction: POST_REACTION.LIKE})
  }

  function dislikePost() {
    reactToPostById({id: post.id, reaction: POST_REACTION.DISLIKE})
  }

  if (isLoading) return <Loader />
  if (isError) return <Typography variant="muted">Помилка</Typography>

  async function deletePost() {
    const answer = await deletePostById(post.id)

    if (answer?.error) return toast.error('Помилка.')
    toast.success('Успішно')
    setId(null)
  }

  const prettyDate = dateFormatter.format(Date.parse(post.publicationDate))

  return (
    <>
      <article>
        <header>
          <Typography as="h2">{post.title}</Typography>
          <time dateTime={post.publicationDate}>{prettyDate}</time>
        </header>
        <Typography>{post.body ?? 'Немає опису.'}</Typography>
        <footer>
          <div className="actions">
            <Clickable onClick={likePost} disabled={isReacting} variant="ghost">
              <ThumbsUp /> {post.likesNumber}
            </Clickable>
            <Clickable
              onClick={dislikePost}
              disabled={isReacting}
              variant="ghost"
            >
              <ThumbsDown /> {post.dislikesNumber}
            </Clickable>
          </div>
          <div className="actions">
            <Clickable
              as={Link}
              to={navigation.posts.getEdit(post.id)}
              variant="icon"
            >
              <Pencil />
              <span className="sr-only">Редагувати</span>
            </Clickable>
            <Clickable
              onClick={deletePost}
              variant="icon"
              style={{
                backgroundColor: `color-mix(
                  in oklab,
                  var(--destructive) 60%,
                  transparent)
                `,
                color: 'var(--foreground)',
              }}
            >
              <Shredder />
            </Clickable>
          </div>
        </footer>
      </article>
      <style jsx>{`
        article > :global(* + *) {
          margin-block-start: 1.25rem;
        }

        header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 1rem;
        }

        time {
          display: block;
          color: var(--muted-foreground, #6c757d);
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        footer {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 0.5rem 1rem;
          border-top: 1px solid var(--border);
          padding-top: 1.25rem;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .actions:last-child {
          justify-content: end;
        }
      `}</style>
    </>
  )
}

export default PostDetails
