import Container from '@/components/ui/Container'
import Typography from '@/components/ui/Typography'

function HomePage() {
  return (
    <>
      <Container className="flow-6 text-center">
        <Typography as="h1">Урок 12: Redux практика</Typography>
        <ol className="flow-1">
          <li>доробити задачу 2 (додати видалення і додавання постів)</li>
          <li>додати ще одну сторінку, у якій реалізовано infinite scroll</li>
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
