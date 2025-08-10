import {
  useGetAllAppointmentsQuery,
  useGetAllDoctorsQuery,
  useGetAllPatientsQuery,
} from '@/api'
import {Container, Loader, Typography} from '@/components/ui'
import Collapse from '@/components/ui/Collapse'
import Stat from '@/components/ui/Stat'
import {BriefcaseMedical, CalendarCheck2, Users} from 'lucide-react'

const collapseName = 'collapse_group'

function DashboardPage() {
  const {data: patientsData = [], isLoading: isPatientsLoading} =
    useGetAllPatientsQuery()
  /** @type {import('@/types').Patient[]} */
  const patientsList = patientsData

  const {data: doctorsData = [], isLoading: isDoctorsLoading} =
    useGetAllDoctorsQuery()
  /** @type {import('@/types').Doctor[]} */
  const doctorsList = doctorsData

  const {data: appointmentsData = [], isLoading: isAppointmentsLoading} =
    useGetAllAppointmentsQuery()
  /** @type {import('@/types').Appointment[]} */
  const appointmentsList = appointmentsData

  const isLoading =
    isPatientsLoading || isDoctorsLoading || isAppointmentsLoading

  return (
    <Container className="space-y-10">
      <h1 className="mx-auto grid max-w-xl gap-4 text-center">
        <Typography variant="h1" component="span">
          Система електронних медичних записів
        </Typography>
        <Typography variant="h3" component="span">
          Панель адміністратора
        </Typography>
      </h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="stats grid shadow max-lg:stats-vertical">
          <Stat
            className="text-info-content"
            icon={<Users />}
            title="Пацієнтів"
            value={patientsList.length}
            desc="На 11% більше, ніж минулого місяця"
          />
          <Stat
            className="text-secondary-content"
            icon={<BriefcaseMedical />}
            title="Лікарів"
            value={doctorsList.length}
            desc="На 5% більше, ніж минулого місяця"
          />
          <Stat
            className="text-success-content"
            icon={<CalendarCheck2 />}
            title="Зустрічей"
            value={appointmentsList.length}
            desc="На 21% більше, ніж минулого місяця"
          />
        </div>
      )}

      {/* Info Cards Section */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="card bg-info text-info-content shadow-lg">
          <div className="card-body">
            <h3 className="card-title">Безпека даних</h3>
            <p>
              Всі дані пацієнтів та лікарів зберігаються у захищеному середовищі
              з резервним копіюванням.
            </p>
          </div>
        </div>
        <div className="card bg-warning text-warning-content shadow-lg">
          <div className="card-body">
            <h3 className="card-title">Зручний інтерфейс</h3>
            <p>
              Інтуїтивно зрозумілий дизайн для швидкої навігації та ефективної
              роботи персоналу.
            </p>
          </div>
        </div>
        <div className="card bg-success text-success-content shadow-lg">
          <div className="card-body">
            <h3 className="card-title">Підтримка 24/7</h3>
            <p>
              Наша команда завжди готова допомогти вам у будь-який час доби.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-8 space-y-4">
        <h2 className="mb-2 text-xl font-bold">Часті питання</h2>
        {[
          {
            title: 'Як зробити запис?',
            body: 'Перейдіть у розділ "Зустрічі" та натисніть кнопку "Створити". Заповніть форму та підтвердіть запис.',
          },
          {
            title: 'Як створити обліковий запис?',
            body: 'Натисніть кнопку "Зареєструватися" у верхньому правому куті і пройдіть процедуру реєстрації.',
          },
          {
            title: 'Я забув свій пароль. Що мені робити?',
            body: 'Натисніть "Забули пароль" на сторінці входу і дотримуйтесь інструкцій, надісланих на вашу електронну пошту.',
          },
          {
            title: 'Чи можна експортувати дані?',
            body: 'Так, у розділі "Пацієнти" та "Зустрічі" доступна функція експорту у форматі CSV.',
          },
        ].map(({title, body}, i) => (
          <Collapse key={i} title={title} body={body} name={collapseName} />
        ))}
      </div>
    </Container>
  )
}

export default DashboardPage
