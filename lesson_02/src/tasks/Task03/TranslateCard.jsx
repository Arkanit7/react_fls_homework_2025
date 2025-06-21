import {STATUS} from '@/tasks/Task03/constants'
import FieldGroup from '@/components/composed/FieldGroup'
import TranslateButton from '@/tasks/Task03/TranslateButton'

function getCardClass(status) {
  switch (status) {
    case STATUS.SUCCESS:
      return 'border-green-600 ring-green-600/50'
    case STATUS.ERROR:
      return 'border-red-600 ring-red-600/50'
    default:
      return 'border-cyan-600 ring-cyan-600/50'
  }
}

function Notification({status}) {
  switch (status) {
    case STATUS.ERROR:
      return <p>Невірно, спробуйте ще раз</p>
    case STATUS.SUCCESS:
      return <p>Добре. Молодець!</p>
    default:
      return null
  }
}

function TranslateCard({
  phrase,
  setPhrase,
  status,
  currentQuestion,
  handleSubmit,
}) {
  return (
    <div
      className={`bg-gray-800 rounded-lg overflow-hidden border-2 ring-2 ${getCardClass(
        status,
      )}`}
    >
      <div className="aspect-4/3">
        <img
          className="size-full object-cover"
          src={currentQuestion.imgSrc}
          alt=""
        />
      </div>
      <div className="p-4 space-y-4">
        <p className="text-3xl text-center">{currentQuestion.word}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="grid gap-3">
            <FieldGroup
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              label="Ваш переклад:"
              placeholder="Введіть текст..."
              required
              autoComplete="off"
            />
          </p>
          <p>
            <TranslateButton status={status} />
          </p>
        </form>

        <Notification status={status} />
      </div>
    </div>
  )
}

export default TranslateCard
