import Clickable from '@/components/ui/Clickable'
import {
  useDeletePostByIdMutation,
  useReactToPostByIdMutation,
} from '../postsApi'
import Typography from '@/components/ui/Typography'
import {POST_REACTION} from '../constants'
import {Link} from 'react-router'
import {navigation} from '@/lib/constants'
import {toast} from 'sonner'

const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
  dateStyle: 'medium',
})

function PostPreview({post, setSelectedId}) {
  // ---

  const [reactToPostById, {isLoading: isReacting}] =
    useReactToPostByIdMutation()

  function likePost() {
    reactToPostById({id: post.id, reaction: POST_REACTION.LIKE})
  }

  function dislikePost() {
    reactToPostById({id: post.id, reaction: POST_REACTION.DISLIKE})
  }

  // ---

  const [deletePostById] = useDeletePostByIdMutation()

  async function deletePost() {
    const answer = await deletePostById(post.id)

    if (answer?.error) return toast.error('Помилка')

    toast.success('Успішно')
    setSelectedId(null)
  }

  const prettyDate = dateFormatter.format(Date.parse(post.publicationDate))

  return (
    <>
      <article>
        <header>
          <Typography as="h2" variant="h3">
            {post.title}
          </Typography>
          <time dateTime={post.publicationDate}>{prettyDate}</time>
        </header>
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
          {setSelectedId && (
            <Clickable onClick={() => setSelectedId(post.id)}>Деталі</Clickable>
          )}
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
          padding-block: 1.5rem;
          padding-inline: 0.75rem;
          border: 1px solid var(--border);
          background-color: var(--card);
          color: var(--card-foreground);
          border-radius: 0.5rem;
        }

        article > :global(* + *) {
          margin-block-start: 1rem;
        }

        footer {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: end;
        }
      `}</style>
    </>
  )
}

export default PostPreview
