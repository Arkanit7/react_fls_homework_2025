function Car({details}) {
  return (
    <tr>
      {Object.values(details).map((detail, i) => (
        <td key={i} className="border border-cyan-900 p-2">
          {detail}
        </td>
      ))}
    </tr>
  )
}

export default Car
