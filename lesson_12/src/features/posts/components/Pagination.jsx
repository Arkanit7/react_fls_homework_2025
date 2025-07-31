import {choosePageNumber} from '@/features/posts/postsSlice'
import {useDispatch, useSelector} from 'react-redux'
import Clickable from '@/components/ui/Clickable'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {POSTS_STATUS} from '@/lib/constants'

function Pagination() {
  const {chosenPages, totalPages, status} = useSelector((state) => state.posts)
  const isLoading = status === POSTS_STATUS.LOADING
  const lastChosenPage = chosenPages.at(-1)

  const dispatch = useDispatch()

  function handlePageNumberChange(pageNumber) {
    return () => dispatch(choosePageNumber(pageNumber))
  }

  return (
    <>
      <div className="actions">
        <div className="column">
          <Clickable
            variant="icon"
            size="sm"
            disabled={isLoading || chosenPages.includes(1)}
            onClick={handlePageNumberChange(lastChosenPage - 1)}
          >
            <ChevronLeft />
            <div className="sr-only">Назад</div>
          </Clickable>
        </div>
        <ol className="list">
          {Array.from({length: totalPages}, (_, i) => (
            <li key={i}>
              <Clickable
                disabled={isLoading || chosenPages.includes(i + 1)}
                size="sm"
                onClick={handlePageNumberChange(i + 1)}
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
            disabled={
              isLoading || totalPages <= 0 || chosenPages.includes(totalPages)
            }
            onClick={handlePageNumberChange(lastChosenPage + 1)}
          >
            <ChevronRight />
            <div className="sr-only">Уперед</div>
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
