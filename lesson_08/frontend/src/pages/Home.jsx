import Clickable from '@/components/Clickable'
import Container from '@/components/Container'
import Typography from '@/components/Typography'
import frontNavigation from '@/routes/frontNavigation'
import {Link} from 'react-router'

function Home() {
  return (
    <Container>
      <div className="fle space-y-4 rounded-3xl bg-yellow-400 px-4 py-6">
        <div className="grid gap-6">
          <div className="max-w-sm space-y-4">
            <Typography as="h1" variant={'hero'}>
              <span>TeachMeet</span>{' '}
              <Typography variant="h2">– вчительські збори? Легко!</Typography>
            </Typography>
            <Typography variant="h3">
              Цей додаток допоможе вам організувати збори вчителів, щоб
              обговорити важливі питання, поділитися досвідом та знайти нових
              колег.
            </Typography>
            <Clickable
              className="max-xs:w-full"
              as={Link}
              to={frontNavigation.teachers.index}
            >
              Організувати збори
            </Clickable>
          </div>
          <img
            className="justify-self-end"
            src="/images/kittens.webp"
            alt="Кошенята"
          />
        </div>
      </div>
    </Container>
  )
}

export default Home
