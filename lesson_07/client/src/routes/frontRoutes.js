export const ROUTES = {
  HOME: '/',
  CONTACTS: 'contacts',
  PAYMENT: 'payment',
  SHOP: {
    INDEX: 'products',
    ADD: 'new',
    PRODUCT: ':id',
    getDetailedLink(id) {
      return `${id}`
    },
    getEditLink(id) {
      return `${id}/edit`
    },
  },
}

export const NAV_LINKS = [
  {to: ROUTES.HOME, label: 'Home'},
  {to: ROUTES.SHOP.INDEX, label: 'Shop'},
  {to: ROUTES.PAYMENT, label: 'Payment'},
  {to: ROUTES.CONTACTS, label: 'Contacts'},
]
