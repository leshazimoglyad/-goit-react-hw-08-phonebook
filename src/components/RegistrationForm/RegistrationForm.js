import {
  Button,
  Input,
  LabelReg,
  RegisterContainer,
  Title,
} from 'components/Style/Element.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterContainer>
      <Title>Please, sign up</Title>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <LabelReg>Username</LabelReg>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter your name"
            required
          />
        </label>
        <label className={css.label}>
          <LabelReg>Email</LabelReg>

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
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
        <Button type="submit">Register</Button>
      </form>
    </RegisterContainer>
  );
};
export default RegisterForm;