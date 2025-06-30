import Field from '@/components/Field'
import {useInput, useDebounce} from '@/hooks'
import {useMemo} from 'react'
import {REACT_PACKAGES} from '../constants'
import {mapPackagesToId, getUppercasePackages, filterPackages} from '../utils'
import RenderCountWrapper from '@/components/RenderCountWrapper'
import SearchList from './SearchList'

function Search() {
  const packagesById = useMemo(() => mapPackagesToId(REACT_PACKAGES), [])
  const packagesUpperCase = useMemo(
    () => getUppercasePackages(REACT_PACKAGES),
    [],
  )
  // ---
  const searchInput = useInput('')
  const upperCaseSearchTerm = searchInput.value.toUpperCase()
  const deferredSearch = useDebounce(upperCaseSearchTerm)
  // ---
  const filteredItems = useMemo(
    () => filterPackages(deferredSearch, packagesById, packagesUpperCase),
    [deferredSearch, packagesById, packagesUpperCase],
  )

  return (
    <RenderCountWrapper title="Search">
      <div className="space-y-4">
        <h2 className="text-xl">NPM React пакунки</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <Field type="search" placeholder="Пошук" {...searchInput} />
        </form>
        <SearchList list={filteredItems} />
      </div>
    </RenderCountWrapper>
  )
}

export default Search
