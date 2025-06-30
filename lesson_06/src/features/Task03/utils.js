import {Watch, Monitor, Smartphone, Tablet, TvMinimal} from 'lucide-react'

export function getDeviceIconAndText(deviceWidth) {
  let icon
  let text

  if (deviceWidth < 320) {
    icon = Watch
    text = 'Смарт-годинник'
  } else if (deviceWidth < 576) {
    icon = Smartphone
    text = 'Смартфон'
  } else if (deviceWidth < 992) {
    icon = Tablet
    text = 'Планшет'
  } else if (deviceWidth < 1920) {
    icon = Monitor
    text = 'Монітор'
  } else {
    icon = TvMinimal
    text = 'Широкий монітор'
  }

  return {
    icon,
    text,
  }
}
