import Container from '@/components/Container'
import Typography from '@/components/ui/Typography'
import {useThemeContext} from '@/contexts/ThemeContext'
import {THEMES} from '@/lib/constants'

const themeBackgrounds = {
  [THEMES.SYSTEM]:
    'https://plus.unsplash.com/premium_photo-1682089280163-3fb875715a5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  [THEMES.DARK]:
    'https://plus.unsplash.com/premium_photo-1661416415130-2e6cf748dff2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  [THEMES.LIGHT]:
    'https://images.unsplash.com/photo-1553369728-15ec6971afaf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  [THEMES.SOLARIZED]:
    'https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

function Home() {
  const {theme} = useThemeContext()

  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="max-w-md space-y-4 text-center md:text-left">
          <Typography as="h1" variant="h1">
            Турпослуги
          </Typography>
          <Typography as="h2" variant="subtitle" className="text-foreground/80">
            Відкрийте для себе найкращі тури, готелі та автобуси України
          </Typography>
        </div>
        <div className="flex-none">
          <img
            src={themeBackgrounds[theme]}
            alt="Тематичне зображення"
            className="size-64 rounded-2xl border-4 border-primary/30 object-cover shadow-xl md:size-100"
          />
        </div>
      </div>
    </Container>
  )
}

export default Home
