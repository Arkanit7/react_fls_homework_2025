import Container from './Container'
import Typography from './Typography'

function Footer() {
  return (
    <footer>
      <Container>
        <div className="rounded-t-3xl bg-red-400 px-4 py-6 text-center">
          <Typography as="small" variant="p">
            © {new Date().getFullYear()} TeachMeet. Всі права захищені.
          </Typography>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
