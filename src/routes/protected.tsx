// import { Suspense } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// import { MainLayout } from '@/components/Layout';
// import { lazyImport } from '@/utils/lazyImport';
// import { Box, CircularProgress } from '@chakra-ui/react';

// // const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');
// // const { Profile } = lazyImport(() => import('@/features/users'), 'Profile');
// // const { Users } = lazyImport(() => import('@/features/users'), 'Users');
// // const { HomeRoutes } = lazyImport(() => import('@/features/home'), 'HomeRoutes');
// const { Home } = lazyImport(() => import('@/features/home'), 'Home');

// const App = () => {
//     return (
//         <MainLayout>
//             <Suspense
//                 fallback={
//                     <Box
//                         w='100vw'
//                         h="100vh"
//                         display="flex"
//                         justifyContent="center"
//                         alignItems="center"
//                         >
//                         <CircularProgress isIndeterminate color='green.300' />
//                     </Box>
//                 }
//             >
//                 <Outlet />
//             </Suspense>
//         </MainLayout>
//     );
// };

// export const protectedRoutes = [
//     {
//         path: '/',
//         element: <App />,
//         children: [
//             // { path: '/home/*', element: <Home /> },
//             //   { path: '/discussions/*', element: <DiscussionsRoutes /> },
//             //   { path: '/users', element: <Users /> },
//             //   { path: '/profile', element: <Profile /> },
//             //   { path: '/', element: <Dashboard /> },
//             { path: '*', element: <Navigate to="." /> },
//         ],
//     },
// ];