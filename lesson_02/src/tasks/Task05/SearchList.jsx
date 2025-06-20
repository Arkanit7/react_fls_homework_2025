import SearchItem from './SearchItem'

function SearchList({list}) {
  return (
    <div className="divide-y-1 divide-gray-700">
      {list.map((item, i) => (
        <SearchItem key={i} {...item} />
      ))}
    </div>
  )
}

export default SearchList
