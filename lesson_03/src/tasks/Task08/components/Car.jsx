function Car({brand, year, price}) {
  return (
    <tr>
      <td className="border border-cyan-900 p-2">{brand}</td>
      <td className="border border-cyan-900 p-2">{year}</td>
      <td className="border border-cyan-900 p-2">{price}</td>
    </tr>
  )
}

export default Car
