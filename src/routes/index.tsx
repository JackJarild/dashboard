import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';

const { Login } = lazyImport(() => import('@/features/auth'), 'Login');
const { MainLayout } = lazyImport(() => import('@/components/Layout'), 'MainLayout');
const { Home } = lazyImport(() => import('@/features/home'), 'Home');
const { NotFound } = lazyImport(() => import('@/features/home'), 'NotFound');
const { Settings } = lazyImport(() => import('@/features/settings'), 'Settings');
const { Order } = lazyImport(() => import('@/features/order'), 'Order');

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Login />}
        errorElement={<Navigate to='/' />}
      />

      <Route
        element={<MainLayout />}
      //errorElement={<NotFound />}
      >
        <Route errorElement={<NotFound />}>
          {/* <Route index={true} errorElement={<p>Test</p>} /> */}
          <Route path="home" element={<Home isFirstMount={true} />} />
          <Route path="order" element={<Order />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </>
  )
)

