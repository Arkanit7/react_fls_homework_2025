import GoHomeLink from '@/components/GoHomeLink'
import Container from '@/components/Container'
import Typography from '@/components/Typography'

function AboutApp() {
  return (
    <article className="py-4">
      <Container className="space-y-4">
        <Typography as="h1">Про додаток</Typography>

        <Typography>
          Цей додаток створено для організації зборів вчителів, щоб обговорити
          важливі питання, поділитися досвідом та знайти нових колег. Ви можете
          додавати вчителів, переглядати їх профілі та організовувати збори.
        </Typography>

        <GoHomeLink>На головну</GoHomeLink>
      </Container>
    </article>
  )
}

export default AboutApp
