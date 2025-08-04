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
import {Info, Pencil, Shredder, ThumbsDown, ThumbsUp} from 'lucide-react'

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
          <Typography className="truncate" as="h2" variant="h3">
            {post.title}
          </Typography>
          <Typography as="time" variant="p" dateTime={post.publicationDate}>
            {prettyDate}
          </Typography>
        </header>
        <footer>
          <div className="actions">
            <Clickable
              size="sm"
              onClick={likePost}
              disabled={isReacting}
              variant="ghost"
            >
              <ThumbsUp /> {post.likesNumber}
            </Clickable>
            <Clickable
              size="sm"
              onClick={dislikePost}
              disabled={isReacting}
              variant="ghost"
            >
              <ThumbsDown /> {post.dislikesNumber}
            </Clickable>
          </div>

          <div className="actions">
            <Clickable
              size="sm"
              onClick={() => setSelectedId(post.id)}
              variant="icon"
            >
              <Info />
              <span className="sr-only">Деталі</span>
            </Clickable>
            <Clickable
              size="sm"
              as={Link}
              to={navigation.posts.getEdit(post.id)}
              variant="icon"
            >
              <Pencil />
              <span className="sr-only">Редагувати</span>
            </Clickable>
            <Clickable
              size="sm"
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
              <span className="sr-only">Видалити</span>
            </Clickable>
          </div>
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
          justify-content: space-between;
          align-items: start;
          gap: 1rem;
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

export default PostPreview
