import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const UserMenu = lazy(() => import('./UserMenu'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const PublicRoute = lazy(() => import('./PublicRoute'));
const NotFound = lazy(() => import('../pages/NotFound'));
const RegisterForm = lazy(() => import('../pages/RegisterForm'));
const LoginForm = lazy(() => import('../pages/LoginForm'));
const Contacts = lazy(() => import('../pages/Contacts'));

const App = () => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />}>
            <Route index element={<UserMenu />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default App;
