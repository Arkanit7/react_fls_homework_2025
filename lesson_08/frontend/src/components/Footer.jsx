import Container from './Container'
import Typography from './Typography'

function Footer() {
  return (
    <footer className="rounded-t-3xl bg-orange-400 py-6 text-center">
      <Container>
        <Typography as="small" variant="p">
          © {new Date().getFullYear()} TeachMeet. Усі права захищені.
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
