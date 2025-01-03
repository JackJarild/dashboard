import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';
import { ProtectedRoute } from './ProtectedRoute';

const { Login } = lazyImport(() => import('@/features/auth'), 'Login');
const { MainLayout } = lazyImport(() => import('@/components/Layout'), 'MainLayout');
const { Home } = lazyImport(() => import('@/features/home'), 'Home');
const { ErrorPage } = lazyImport(() => import('@/features/home'), 'ErrorPage');
const { NotFound } = lazyImport(() => import('@/features/home'), 'NotFound');
const { Settings } = lazyImport(() => import('@/features/settings'), 'Settings');
const { Order } = lazyImport(() => import('@/features/order'), 'Order');
const { OrderReceived } = lazyImport(() => import('@/features/order'), 'OrderReceived');
const { Archive } = lazyImport(() => import('@/features/archive'), 'Archive');

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        path="/login"
        element={<Login />}
      //errorElement={<Navigate to='/' />}
      />

      <Route element={<ProtectedRoute />}>
        <Route
          element={<MainLayout />}
          errorElement={<ErrorPage />}
        >
          {/* <Route errorElement={<ErrorPage />}> */}

          <Route path="/" element={<Home isFirstMount={true} />} />
          <Route path="order" element={<Order />} />
          <Route path='order/received' element={<OrderReceived />} />
          <Route path="settings" element={<Settings />} />
          <Route path="archive" element={<Archive />} />
          <Route path='*' element={<NotFound />} />
        </Route>

        {/* </Route> */}
      </Route>

    </>
  )
)

