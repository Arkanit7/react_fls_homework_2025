import {Route, Routes} from 'react-router'
import MainLayout from '@/layouts/MainLayout'
import {ROUTES} from './frontRoutes'
import Home from '@/pages/Home'
import Contacts from '@/pages/Contacts'
import Payment from '@/pages/Payment'
import Shop from '@/pages/shop/Shop'
import NotFound from '@/pages/NotFound'
import Product from '@/pages/shop/Product'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.PAYMENT} element={<Payment />} />
        <Route path={ROUTES.SHOP.INDEX}>
          <Route index element={<Shop />} />
          <Route path={ROUTES.SHOP.PRODUCT} element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
