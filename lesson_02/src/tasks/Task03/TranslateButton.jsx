import {STATUS} from '@/tasks/Task03/constants'
import Button from '@/components/Button'

function TranslateButton({status}) {
  switch (status) {
    case STATUS.IDLE:
      return (
        <Button type="submit" size="lg" className="w-full">
          Перевірити
        </Button>
      )
    case STATUS.ERROR:
      return (
        <Button type="submit" variant="alert" size="lg" className="w-full">
          Спробуйте ще раз
        </Button>
      )
    case STATUS.SUCCESS:
      return (
        <Button
          type="submit"
          variant="success"
          size="lg"
          className="w-full
        "
        >
          Далі
        </Button>
      )
    default:
      return null
  }
}

export default TranslateButton
