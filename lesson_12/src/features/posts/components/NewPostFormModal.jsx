import {useDispatch} from 'react-redux'
import Clickable from '@/components/ui/Clickable'
import {addPost} from '@/features/posts/postsThunks'
import FieldWithLabel from '@/components/ui/FieldWithLabel'
import TextareaWithLabel from '@/components/ui/TextareaWithLabel'
import {BookPlusIcon} from 'lucide-react'
import Typography from '@/components/ui/Typography'
import {toast} from 'sonner'
import Modal from '@/components/ui/Modal'
import {useState} from 'react'

function NewPostFormModal() {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  async function handleFormAction(formData) {
    const {meta, payload} = await dispatch(
      addPost(Object.fromEntries(formData)),
    )
    if (meta.requestStatus === 'fulfilled') {
      toast.success('Успішно додано новий пост.')
      setIsOpen(false)
    } else if (meta.requestStatus === 'rejected') toast.error(payload)
  }

  return (
    <>
      <Clickable onClick={() => setIsOpen(true)}>
        <BookPlusIcon /> Створити
      </Clickable>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <form className="flow-4" action={handleFormAction} autoComplete="off">
          <div className="header">
            <Typography as="p" variant="h3">
              Новий пост
            </Typography>
          </div>
          <ul className="flow-4">
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
              <Clickable
                onClick={() => setIsOpen(false)}
                type="reset"
                variant="outline"
              >
                Скасувати
              </Clickable>
              <Clickable type="submit">
                <BookPlusIcon /> Створити
              </Clickable>
            </li>
          </ul>
        </form>
      </Modal>
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

export default NewPostFormModal
