import Typography from '@/components/ui/Typography'
import Container from '@/components/ui/Container'

function ContactsPage() {
  return (
    <>
      <Container className="flow-6 text-center">
        <div className="flow-1">
          <Typography as="h1">Контакти</Typography>
          <Typography>Зв'яжіться з нами будь-яким зручним способом:</Typography>
        </div>
        <section className="flow-1">
          <Typography as="h2" variant="h4">
            Офіс
          </Typography>
          <Typography>м. Київ, вул. Вигадана, 123, офіс 45</Typography>
        </section>
        <section className="flow-1">
          <Typography as="h2" variant="h4">
            Телефони
          </Typography>
          <Typography>
            <Typography as="a" variant="link" href="tel:+380441234567">
              +38 (044) 123-45-67
            </Typography>
            <br />
            <Typography as="a" variant="link" href="tel:+380501234567">
              +38 (050) 123-45-67
            </Typography>
          </Typography>
        </section>
        <section className="flow-1">
          <Typography as="h2" variant="h4">
            Email
          </Typography>
          <Typography>
            <Typography as="a" variant="link" href="mailto:info@example.com">
              info@example.com
            </Typography>
          </Typography>
        </section>
        <section className="flow-1">
          <Typography as="h2" variant="h4">
            Графік роботи
          </Typography>
          <Typography>
            Пн-Пт: 09:00 – 18:00
            <br />
            Сб-Нд: вихідний
          </Typography>
        </section>
        <section className="flow-1">
          <Typography as="h2" variant="h4">
            Ми в соцмережах
          </Typography>
          <Typography>
            <Typography
              variant="link"
              as="a"
              href="https://facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Typography>{' '}
            |{' '}
            <Typography
              variant="link"
              as="a"
              href="https://instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Typography>{' '}
            |{' '}
            <Typography
              variant="link"
              as="a"
              href="https://t.me/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </Typography>
          </Typography>
        </section>
      </Container>
    </>
  )
}

export default ContactsPage
