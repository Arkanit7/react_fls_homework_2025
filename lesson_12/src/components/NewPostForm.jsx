import {useDispatch} from 'react-redux'
import Clickable from './ui/Clickable'
import {addPost} from '@/app/postsThunk'
import FieldWithLabel from './ui/FieldWithLabel'
import TextareaWithLabel from './ui/TextareaWithLabel'
import {BookPlusIcon} from 'lucide-react'
import Typography from './ui/Typography'
import {toast} from 'sonner'

function NewPostForm() {
  const dispatch = useDispatch()

  function handleFormAction(formData) {
    dispatch(addPost(Object.fromEntries(formData))).then(({meta, payload}) => {
      if (meta.requestStatus === 'fulfilled')
        toast.success('Успішно додано новий пост.')
      else if (meta.requestStatus === 'rejected') toast.error(payload)
    })
  }

  return (
    <>
      <form className="flow-4" action={handleFormAction} autoComplete="off">
        <Typography as="p" variant="h3">
          Новий пост
        </Typography>
        <ul className="flow-3">
          <li>
            <FieldWithLabel name="title" label="Заголовок" required />
          </li>
          <li>
            <TextareaWithLabel name="body" label="Текст" required />
          </li>
          <li>
            <FieldWithLabel name="authorId" label="Автор" required />
          </li>
          <li className="actions">
            <Clickable type="submit">
              <BookPlusIcon /> Створити
            </Clickable>
          </li>
        </ul>
      </form>
      <style jsx>{`
        .actions {
          display: flex;
          justify-content: end;
          gap: 0.375rem;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  )
}

export default NewPostForm
