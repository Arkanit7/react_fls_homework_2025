function FlightSummary({servicesSelection}) {
  const {flightClass, newspaper, cognac, appetizer, beer, chips} =
    servicesSelection

  return (
    <div className="">
      <h3 className="text-xl">Підсумки</h3>
      <ul>
        {flightClass && <li>Клас – {flightClass}</li>}
        {newspaper && <li>Газета – {newspaper}</li>}
        {cognac && <li>Коньяк – {cognac}</li>}
        {appetizer && <li>Закуска – {appetizer}</li>}
        {beer && <li>Пиво – {beer}</li>}
        {chips && <li>Чипси – {chips}</li>}
      </ul>
    </div>
  )
}

export default FlightSummary
