import EconomyClassServices from './EconomyClassServices'
import BusinessClassServices from './BusinessClassServices'
import FlightSummary from './FlightSummary'
import {FLIGHT_CLASSES, BG_SRC} from './constants'
import useFlightServices from './useFlightServices'

function FlightServices() {
  const {services, updateFlightClass, updateServices} = useFlightServices()
  const imgSrc = BG_SRC[services.flightClass]

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative isolate overflow-hidden p-4 rounded-lg border-2 space-y-4 bg-gray-950"
    >
      {imgSrc && (
        <img
          className="absolute inset-0 -z-1 size-full object-cover opacity-50"
          src={imgSrc}
          alt=""
        />
      )}
      <div className="flex flex-wrap gap-2">
        <h2 className="text-2xl font-bold">Послуги рейсу</h2>
        <select
          value={services.flightClass}
          onChange={(e) => updateFlightClass(e.target.value)}
          className="bg-transparent p-2 rounded flex-auto border focus:bg-gray-700"
        >
          <option value="">Оберіть клас квитка</option>
          {Object.values(FLIGHT_CLASSES).map((flightClass, i) => (
            <option key={i}>{flightClass}</option>
          ))}
        </select>
      </div>
      {services.flightClass === FLIGHT_CLASSES.ECONOMY && (
        <EconomyClassServices
          services={services}
          updateServices={updateServices}
        />
      )}
      {services.flightClass === FLIGHT_CLASSES.BUSINESS && (
        <BusinessClassServices
          services={services}
          updateServices={updateServices}
        />
      )}

      {services.flightClass && (
        <>
          <hr />
          <FlightSummary servicesSelection={services} />
        </>
      )}
    </form>
  )
}

export default FlightServices
