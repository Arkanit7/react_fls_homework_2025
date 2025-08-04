import Container from './ui/Container'

function Footer({...props}) {
  return (
    <>
      <footer className="footer" {...props}>
        <Container>
          <div className="wrap">
            <p className="copyright">Усі права захищено.</p>
          </div>
        </Container>
      </footer>
      <style jsx>{`
        .wrap {
          min-block-size: 4rem;
          display: grid;
          align-items: center;
        }

        .copyright {
          color: var(--muted-foreground);
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Footer
