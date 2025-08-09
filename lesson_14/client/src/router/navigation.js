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

export const navigationRoutes = {
  dashboard: `/${ROUTES.DASHBOARD}`,
  patients: {
    index: `/${ROUTES.PATIENTS.INDEX}`,
    new: `/${ROUTES.PATIENTS.INDEX}/${ROUTES.PATIENTS.NEW}`,
    getDetails(id) {
      return `${this.index}/${id}`
    },
    getEditDetails(id) {
      return `${this.getDetails(id)}/edit`
    },
  },
  doctors: {
    index: `/${ROUTES.DOCTORS.INDEX}`,
    new: `/${ROUTES.DOCTORS.INDEX}/${ROUTES.DOCTORS.NEW}`,
    getDetails(id) {
      return `${this.index}/${id}`
    },
    getEditDetails(id) {
      return `${this.getDetails(id)}/edit`
    },
  },
  appointments: {
    index: `/${ROUTES.APPOINTMENTS.INDEX}`,
    new: `/${ROUTES.APPOINTMENTS.INDEX}/${ROUTES.APPOINTMENTS.NEW}`,
    getDetails(id) {
      return `${this.index}/${id}`
    },
    getEditDetails(id) {
      return `${this.getDetails(id)}/edit`
    },
  },
  typography: `/${ROUTES.TYPOGRAPHY}`,
}
