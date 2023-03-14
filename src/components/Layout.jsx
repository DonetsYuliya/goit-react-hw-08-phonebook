import Navigation from './Navigation';
import { Outlet, useParams } from 'react-router-dom';

const Layout = () => {
  const { id } = useParams();

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
