import {useDispatch} from 'react-redux'
import {addProduct} from '../productsSlice'

function NewProductForm() {
  const dispatch = useDispatch()

  function handleFormSubmission(formData) {
    const payload = Object.fromEntries(formData)
    dispatch(addProduct(payload))
  }

  return (
    <>
      <h2>Add a product</h2>
      <form action={handleFormSubmission} autoComplete="off">
        <input type="text" name="name" placeholder="name" required />
        <input type="text" name="price" placeholder="price" required />
        <input type="text" name="thumbnail" placeholder="thumbnail" required />
        <button>Create</button>
      </form>
    </>
  )
}

export default NewProductForm
