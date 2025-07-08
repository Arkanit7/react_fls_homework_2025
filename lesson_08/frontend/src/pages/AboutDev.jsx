import Container from '@/components/Container'
import GoHomeLink from '@/components/GoHomeLink'
import Typography from '@/components/Typography'

function AboutApp() {
  return (
    <article className="py-4">
      <Container className="space-y-4">
        <Typography as="h1">Про розробника</Typography>

        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta
          id earum voluptates vitae corporis ex accusamus, aliquid quo,
          repudiandae hic aliquam ullam reiciendis fuga deleniti excepturi
          nostrum aut voluptas?
        </Typography>

        <GoHomeLink>На головну</GoHomeLink>
      </Container>
    </article>
  )
}

export default AboutApp
