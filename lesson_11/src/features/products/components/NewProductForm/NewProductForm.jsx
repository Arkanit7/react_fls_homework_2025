import {useDispatch} from 'react-redux'
import {addProduct} from '../../productsSlice'
import FieldWithLabel from '@/components/FieldWithLabel'
import Clickable from '@/components/Clickable'
import Typography from '@/components/Typography'
import styles from './NewProductForm.module.scss'

function NewProductForm({closeDialog}) {
  const dispatch = useDispatch()

  function handleFormSubmission(formData) {
    const payload = Object.fromEntries(formData)
    dispatch(addProduct(payload))
    closeDialog()
  }

  return (
    <div className="flow-4">
      <Typography as="h2" variant="h3">
        New product
      </Typography>
      <form action={handleFormSubmission} autoComplete="off">
        <ul className="flow-3">
          <li>
            <FieldWithLabel name="name" label="Name" required />
          </li>
          <li>
            <FieldWithLabel
              name="price"
              label="Price"
              required
              type="number"
              step="0.01"
            />
          </li>
          <li>
            <FieldWithLabel
              name="thumbnail"
              label="Thumbnail"
              required
              type="url"
            />
          </li>
          <li className={styles.actions}>
            <Clickable type="reset" variant="outline" onClick={closeDialog}>
              Cancel
            </Clickable>
            <Clickable type="submit">Create</Clickable>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default NewProductForm
