import {
  Button,
  Input,
  LabelReg,
  LogInContainer,
  Title,
} from 'components/Style/Element.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogInContainer>
      <Title>Please, sign in</Title>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <LabelReg>Email</LabelReg>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autocomplete="on"
          />
        </label>
        <label className={css.label}>
          <LabelReg>Password</LabelReg>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </label>
        <Button type="submit">Log In</Button>
      </form>
    </LogInContainer>
  );
};
export default LoginForm;