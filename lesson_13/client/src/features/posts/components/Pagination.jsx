import Clickable from '@/components/ui/Clickable'
import {ChevronLeft, ChevronRight} from 'lucide-react'

function Pagination({currentPage, setCurrentPage, totalPages, isFetching}) {
  const isFirstPage = currentPage <= 1
  const isLastPage = currentPage >= totalPages

  return (
    <>
      <div className="actions">
        <div className="column">
          <Clickable
            variant="icon"
            size="sm"
            disabled={isFetching || isFirstPage}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <ChevronLeft />
            <span className="sr-only">Назад</span>
          </Clickable>
        </div>
        <ol className="list">
          {Array.from({length: totalPages}, (_, i) => (
            <li key={i}>
              <Clickable
                size="sm"
                disabled={isFetching || currentPage === i + 1}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Clickable>
            </li>
          ))}
        </ol>
        <div className="column">
          <Clickable
            variant="icon"
            size="sm"
            disabled={isFetching || isLastPage}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <ChevronRight />
            <span className="sr-only">Уперед</span>
          </Clickable>
        </div>
      </div>
      <style jsx>{`
        .actions {
          display: flex;
          align-items: start;
          justify-content: center;
        }

        .column {
          flex: none;
        }

        .list {
          --fade-out-padding: 0.375rem;

          display: flex;
          gap: var(--fade-out-padding);
          align-items: start;

          overflow-x: auto;
          scroll-snap-type: inline proximity;
          scrollbar-width: thin;
          padding-inline: var(--fade-out-padding);
          scroll-padding-inline: var(--fade-out-padding);
          mask:
            linear-gradient(
                to right,
                transparent,
                white var(--fade-out-padding)
              )
              intersect,
            linear-gradient(
              to left,
              transparent,
              white var(--fade-out-padding)
            );
        }

        .list > * {
          scroll-snap-align: start;
        }
      `}</style>
    </>
  )
}

export default Pagination
