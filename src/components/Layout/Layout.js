import { Header } from 'components/Style/Element.styled';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="contacts">Contacts</NavLink>
          <NavLink to="register">Sign up</NavLink>
          <NavLink to="login">Log In</NavLink>
        </nav>
      </Header>
      <Outlet />
    </div>
  );
};

export default Layout;