import {useDispatch} from 'react-redux'
import Clickable from '../../../components/ui/Clickable'
import {addPost} from '@/features/posts/postsThunks'
import FieldWithLabel from '../../../components/ui/FieldWithLabel'
import TextareaWithLabel from '../../../components/ui/TextareaWithLabel'
import {BookPlusIcon} from 'lucide-react'
import Typography from '../../../components/ui/Typography'
import {toast} from 'sonner'
import Modal from '@/components/ui/Modal'

function NewPostFormModal({closeModal}) {
  const dispatch = useDispatch()

  async function handleFormAction(formData) {
    const {meta, payload} = await dispatch(
      addPost(Object.fromEntries(formData)),
    )
    if (meta.requestStatus === 'fulfilled') {
      toast.success('Успішно додано новий пост.')
      closeModal()
    } else if (meta.requestStatus === 'rejected') toast.error(payload)
  }

  return (
    <Modal closeModal={closeModal}>
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
            <Clickable onClick={closeModal} type="reset" variant="outline">
              Скасувати
            </Clickable>
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
    </Modal>
  )
}

export default NewPostFormModal
