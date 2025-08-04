import Container from '@/components/ui/Container'
import Typography from '@/components/ui/Typography'

function HomePage() {
  return (
    <>
      <Container className="flow-6 text-center">
        <Typography as="h1">Урок 13: RTK Query</Typography>
        <ol className="flow-1">
          <li>Закінчити проєкт з теки «back_front_ДЗ».</li>
          <li>Додати можливість редагувати та додавати нові пости</li>
        </ol>
      </Container>
      <style jsx>{`
        ol {
          list-style-type: revert;
          color: color-mix(in oklab, var(--foreground) 80%, var(--background));
        }

        li {
          list-style-type: revert;
          list-style-position: inside;
        }
      `}</style>
    </>
  )
}

export default HomePage
