import {Typography} from '.'

function Loader() {
  return (
    <div
      className="loading mx-auto block loading-xl loading-infinity text-2xl text-primary"
      role="status"
    >
      <span className="sr-only">Завантаження</span>
    </div>
  )
}

export default Loader
