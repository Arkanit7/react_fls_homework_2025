import {memo} from 'react'
import SearchItem from './SearchItem'
import RenderCountWrapper from '@/components/RenderCountWrapper'

function SearchList({list}) {
  return (
    <RenderCountWrapper title="List">
      <div className="divide-y-1 divide-cyan-900">
        {list.length ? (
          list.map((item) => <SearchItem key={item.id} {...item} />)
        ) : (
          <p className="text-neutral-500">На жаль, нічого не знайдено.</p>
        )}
      </div>
    </RenderCountWrapper>
  )
}

export default memo(SearchList)
