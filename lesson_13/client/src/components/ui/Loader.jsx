import {RotateCw} from 'lucide-react'

function Loader(params) {
  return (
    <>
      <div {...params} role="status">
        <RotateCw />
        Завантаження...
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          margin-inline: auto;
          inline-size: fit-content;
          color: var(--muted-foreground);
          cursor: wait;
        }

        div > :global(svg) {
          flex: none;
          animation: rotate 2s linear infinite;
        }

        @keyframes rotate {
          to {
            rotate: 1turn;
          }
        }
      `}</style>
    </>
  )
}

export default Loader
