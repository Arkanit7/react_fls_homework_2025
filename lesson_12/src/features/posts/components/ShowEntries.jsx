import {choosePageNumber, chosePostsPerPage} from '@/features/posts/postsSlice'
import {
  INITIAL_PAGE,
  INITIAL_POSTS_PER_PAGE,
  POSTS_STATUS,
  SHOW_POSTS_PER_PAGE_OPTIONS,
} from '@/lib/constants'
import {getEntriesPluralName} from '@/lib/utils'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

const pluralFormatter = new Intl.PluralRules('uk-UA')

function ShowEntries() {
  const status = useSelector((state) => state.posts.status)
  const isLoading = status === POSTS_STATUS.LOADING
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(INITIAL_POSTS_PER_PAGE)

  function handleSelection(e) {
    const newAmount = parseInt(e.currentTarget.value)
    setAmount(newAmount)
    dispatch(chosePostsPerPage(newAmount))
    dispatch(choosePageNumber(INITIAL_PAGE))
  }

  return (
    <>
      <label>
        Показувати{' '}
        <select value={amount} onChange={handleSelection} disabled={isLoading}>
          {SHOW_POSTS_PER_PAGE_OPTIONS.map((amount) => (
            <option key={amount}>{amount}</option>
          ))}
        </select>{' '}
        {getEntriesPluralName(pluralFormatter.select(amount))}
      </label>
      <style jsx>{`
        select {
          background-color: var(--popover);
          color: var(--popover-foreground);
          border: 1px solid var(--border);
          padding: 0.125em;
          border-radius: 0.25em;
        }
      `}</style>
    </>
  )
}

export default ShowEntries
