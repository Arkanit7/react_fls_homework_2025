import {memo} from 'react'

function GridRow({item, headers}) {
  return (
    <tr className="transition-[background-color] hover:bg-cyan-400/10">
      {headers.map(({accessorKey}, i) => (
        <td key={i} className="px-2 py-1">
          {item[accessorKey]}
        </td>
      ))}
    </tr>
  )
}

export default memo(GridRow)
