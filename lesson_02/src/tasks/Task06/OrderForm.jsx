import Field from '@/components/Field'
import Button from '@/components/Button'

function OrderForm({makeOrder}) {
  function handleSubmit(e) {
    e.preventDefault()

    const inputEl = e.currentTarget.elements.dish
    const dish = inputEl.value.trim()

    if (dish === '') return

    makeOrder(dish)
    inputEl.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <Field
          placeholder="Назва страви"
          required
          name="dish"
          autoComplete="off"
        />
        <Button type="submit">Замовити</Button>
      </div>
    </form>
  )
}

export default OrderForm
