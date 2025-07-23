export const THEMES = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark',
  SOLARIZED: 'solarized',
}

export const BUSES = [
  {
    id: 'ЛВ04',
    departurePlace: 'Львів',
    departureDate: new Date('2025-07-24 17:53:00'),
    arrivalDate: new Date('2025-07-25 08:33:00'),
    arrivalPlace: 'Запоріжжя',
    priceUah: '1500',
    isSelected: false,
  },
  {
    id: 'КМ89',
    departurePlace: 'Львів',
    departureDate: new Date('2025-07-22 17:53:00'),
    arrivalDate: new Date('2025-07-22 20:33:00'),
    arrivalPlace: 'Київ',
    priceUah: '499',
    isSelected: false,
  },
  {
    id: 'ВІ78',
    departurePlace: 'Дніпро',
    departureDate: new Date('2025-07-23 17:53:00'),
    arrivalDate: new Date('2025-07-23 19:33:00'),
    arrivalPlace: 'Херсон',
    priceUah: '332',
    isSelected: false,
  },
]

export const BUSES_ACTIONS = {
  TOGGLE_SELECTION: 'toggled_bus_selection',
  CLEAR_SELECTION: 'cleared_selected_buses',
}

export const HOTELS = [
  {
    id: 0,
    title: 'Пролісок',
    stars: 5,
    checkInDate: new Date('2025-07-23 17:53:00'),
    checkOutDate: new Date('2025-08-22 08:33:00'),
    priceUah: '10500',
    place: 'Львів',
    thumbnail:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isSelected: false,
  },
  {
    id: 1,
    title: 'Гетьман',
    stars: 4,
    checkInDate: new Date('2025-07-24 17:53:00'),
    checkOutDate: new Date('2025-07-28 08:33:00'),
    priceUah: '15000',
    place: 'Київ',
    thumbnail:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isSelected: false,
  },
  {
    id: 2,
    title: 'Акація',
    stars: 3,
    checkInDate: new Date('2025-07-23 17:53:00'),
    checkOutDate: new Date('2025-07-29 08:33:00'),
    priceUah: '12000',
    place: 'Запоріжжя',
    thumbnail:
      'https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isSelected: false,
  },
]

export const HOTELS_ACTIONS = {
  TOGGLE_SELECTION: 'toggled_hotel_selection',
  CLEAR_SELECTION: 'cleared_selected_hotels',
}
