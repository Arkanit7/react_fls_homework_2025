export default {
  home: '/',
  teachers: {
    index: '/teachers',
    create: '/teachers/create',
    getEdit: (id) => `/teachers/${id}/edit`,
  },
  meeting: '/meeting',
  aboutApp: '/about-app',
  aboutDev: '/about-dev',
}
