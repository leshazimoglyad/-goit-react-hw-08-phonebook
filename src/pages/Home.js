import { HomeContainer, HomeTitle } from 'components/Style/Element.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/slice';

const Home = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  //return (
  //  <HomeContainer>
  //    <HomeTitle>Welcome to PhoneBook!</HomeTitle>
  //   </HomeContainer>
  //);

  return isUserLoggedIn ? (
    <HomeContainer>
      <HomeTitle>Welcome to PhoneBook, {user.name}!</HomeTitle>
      <h2>
        To create your contact, click <Link to="contacts">here</Link>
      </h2>
    </HomeContainer>
  ) : (
    <HomeContainer>
      <HomeTitle>Welcome to PhoneBook!</HomeTitle>
      <h2>
        First time there? <Link to="register">Sign Up</Link>
      </h2>

      <h2>
        Already have account? <Link to="login">Sign in</Link>
      </h2>
    </HomeContainer>
  );
};

export default Home;