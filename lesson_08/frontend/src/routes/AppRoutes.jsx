import PrimaryLayout from '@/layouts/PrimaryLayout'
import Home from '@/pages/Home'
import {Route, Routes} from 'react-router'
import frontRoutes from './frontRoutes'
import AboutApp from '@/pages/AboutApp'
import AboutDev from '@/pages/AboutDev'
import SecondaryLayout from '@/layouts/SecondaryLayout'
import Meeting from '@/pages/Meeting'
import Teachers from '@/pages/teachers/Teachers'
import EditTeacher from '@/pages/teachers/EditTeacher'
import CreateTeacher from '@/pages/teachers/CreateTeacher'
import NotFound from '@/pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path={frontRoutes.home} element={<Home />} />
        <Route path={frontRoutes.meeting} element={<Meeting />} />

        {/* Teachers */}
        <Route path={frontRoutes.teachers.index}>
          <Route index element={<Teachers />} />
          <Route
            path={frontRoutes.teachers.create}
            element={<CreateTeacher />}
          />
          <Route path={frontRoutes.teachers.edit} element={<EditTeacher />} />
        </Route>
      </Route>

      <Route element={<SecondaryLayout />}>
        <Route path={frontRoutes.aboutApp} element={<AboutApp />} />
        <Route path={frontRoutes.aboutDev} element={<AboutDev />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
