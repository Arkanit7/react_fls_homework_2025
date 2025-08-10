export const ROUTES = {
  DASHBOARD: '',
  PATIENTS: {
    INDEX: 'patients',
    NEW: 'new',
    DETAILS: {
      INDEX: ':id',
      EDIT: 'edit',
    },
  },
  DOCTORS: {
    INDEX: 'doctors',
    NEW: 'new',
    DETAILS: {
      INDEX: ':id',
      EDIT: 'edit',
    },
  },
  APPOINTMENTS: {
    INDEX: 'appointments',
    NEW: 'new',
    DETAILS: {
      INDEX: ':id',
      EDIT: 'edit',
    },
  },
  TYPOGRAPHY: 'typography',
}

function makeEntityNavigation(index) {
  return {
    index: `/${index}`,
    new: `/${index}/new`,
    getDetails(id) {
      return `/${index}/${id}`
    },
    getEditDetails(id) {
      return `/${index}/${id}/edit`
    },
  }
}

export const navigationRoutes = {
  dashboard: `/${ROUTES.DASHBOARD}`,
  patients: makeEntityNavigation(ROUTES.PATIENTS.INDEX),
  doctors: makeEntityNavigation(ROUTES.DOCTORS.INDEX),
  appointments: makeEntityNavigation(ROUTES.APPOINTMENTS.INDEX),
  typography: `/${ROUTES.TYPOGRAPHY}`,
}
