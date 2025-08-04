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
          <Clickable onClick={likePost} disabled={isReacting} variant="ghost">
            👍 {post.likesNumber}
          </Clickable>
          <Clickable
            onClick={dislikePost}
            disabled={isReacting}
            variant="ghost"
          >
            👎 {post.dislikesNumber}
          </Clickable>
          <Clickable as={Link} to={navigation.posts.getEdit(post.id)}>
            Редагувати
          </Clickable>
          <Clickable onClick={deletePost} variant="destructive">
            Видалити
          </Clickable>
        </footer>
      </article>
      <style jsx>{`
        article {
          background: var(--card);
          color: var(--card-foreground);
          border-radius: 1.25rem;
          box-shadow:
            0 8px 32px 0 rgba(79, 140, 255, 0.1),
            0 2px 8px 0 rgba(0, 0, 0, 0.08);
          margin: 2rem auto;
          max-width: 700px;
        }

        header {
          border-bottom: 1.5px solid var(--border);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        article > :global(* + *) {
          margin-block-start: 1.25rem;
        }

        footer {
          display: flex;
          gap: 0.5rem 1rem;
          flex-wrap: wrap;
          border-top: 1.5px solid var(--border);
          margin-top: 2rem;
          padding-top: 1.25rem;
          justify-content: end;
        }

        time {
          display: block;
          color: var(--muted-foreground, #6c757d);
          font-size: 1rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </>
  )
}

export default PostDetails
