import { Navigate, Route, Routes, useLocation, useNavigate, useRoutes } from 'react-router-dom';

// import { protectedRoutes } from './protected';
// import { publicRoutes } from './public';

// import { Login } from '@/features/auth/routes/Login';
import { useUser } from '@/lib/auth';
import { AnimatePresence } from 'framer-motion';
import { lazyImport } from '@/utils/lazyImport';
import { useEffect, useState } from 'react';

const { Login } = lazyImport(() => import('@/features/auth'), 'Login');
const { Home } = lazyImport(() => import('@/features/home'), 'Home');

export const AppRoutes = () => {
  const user = useUser({});

  // const commonRoutes = [{ path: '/', element: <Login /> }]

  // const routes = user.data?.firstName ? protectedRoutes : publicRoutes;
  // //const routes = protectedRoutes

  // const element = useRoutes([...routes, ...commonRoutes]);

  // return <>{element}</>;

  const [isFirstMount, setIsFirstMount] = useState(true);
  const [count, setCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('location', location)
    console.log('isFirstMount', isFirstMount)
    if (location.pathname === 'home') {
      if (count <= 0) {
        isFirstMount && setIsFirstMount(false);
      }
      setCount(count + 1)
    }
  }, [location, isFirstMount]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="home"
          element={
            <ProtectedRoute user={user}>
              <Home isFirstMount={isFirstMount} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  )
};

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};