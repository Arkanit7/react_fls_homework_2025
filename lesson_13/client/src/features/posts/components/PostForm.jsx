import Clickable from '@/components/ui/Clickable'
import FieldWithLabel from '@/components/ui/FieldWithLabel'
import TextareaWithLabel from '@/components/ui/TextareaWithLabel'
import {BookPlusIcon} from 'lucide-react'
import {toast} from 'sonner'
import {useNavigate} from 'react-router'
import {navigation} from '@/lib/constants'
import Loader from '@/components/ui/Loader'
import Typography from '@/components/ui/Typography'

function PostForm({post = {}, isLoading, action, actionLabel, isError}) {
  const navigate = useNavigate()

  if (isError) return <Typography variant="muted">Помилка</Typography>

  async function handleFormAction(formData) {
    const answer = await action(Object.fromEntries(formData))

    if (answer.error) return toast.error('Помилка')

    toast.success('Успішно')
    navigate(navigation.pagination.index)
  }

  return (
    <>
      <div className="flow-4">
        <form action={handleFormAction} autoComplete="off">
          <ul className="flow-4">
            <li>
              <FieldWithLabel
                name="title"
                label="Заголовок"
                defaultValue={post.title ?? ''}
                required
                disabled={isLoading}
              />
            </li>
            <li>
              <TextareaWithLabel
                name="body"
                label="Текст"
                defaultValue={post.body ?? ''}
                disabled={isLoading}
              />
            </li>
            <li className="actions">
              <Clickable
                type="reset"
                variant="outline"
                disabled={isLoading}
                onClick={() => navigate(navigation.pagination.index)}
              >
                Скасувати
              </Clickable>
              <Clickable type="submit" disabled={isLoading}>
                <BookPlusIcon /> {actionLabel}
              </Clickable>
            </li>
          </ul>
        </form>
        {isLoading && <Loader />}
      </div>
      <style jsx>{`
        form {
          max-inline-size: 45ch;
          margin-inline: auto;
        }

        .actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        @media (width >= 30rem) {
          .actions {
            flex-direction: row;
            justify-content: end;
            gap: 0.375rem;
          }
        }
      `}</style>
    </>
  )
}

export default PostForm
