import { useState } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Button, Form, Input, P } from 'components/Style/Element.styled';
import { getContacts } from 'redux/contacts/contactSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  const handleChange = e => {
    const event = e.target;

    if (event.type === 'text') {
      setName(event.value);
    }
    if (event.type === 'tel') {
      setNumber(event.value);
    }
  };

  //const handleAddContact = async event => {
  //  event.preventDefault();
  //  try {
  //    data.find(contact => contact.name === name)
  //      ? Notiflix.Notify.info(`${name} is already in contacts.`)
  //      : (await addContact({ name, number })) &&
  //        Notiflix.Notify.success(`${name} added to your phonebook 🚀`);
  //  } catch (error) {
  //    console.log(error);
  //  }
  //  reset();
  //};

  const onSubmitEvt = e => {
    e.preventDefault();

    const inContactsName = items.find(el => el.name === name);
    const inContactsPhone = items.find(el => el.number === number);

    if (inContactsName) {
      //dispatch(
      //  updateContact({
      //   id: inContactsName.id,
      //    name: name,
      //    number: number,
      //  })
      //);
      setNumber('');
      setName('');
      Notiflix.Notify.info(`${name} is already in contacts.`);
      return;
    }
    if (inContactsPhone) {
      //dispatch(
      //  updateContact({
      //    id: inContactsPhone.id,
      //    name: name,
      //    number: number,
      //  })
      //);
      setNumber('');
      setName('');
      Notiflix.Notify.info(`${number} is already in contacts.`);
      return;
    } else {
      dispatch(addContact({ name: name, number: number }));
      Notiflix.Notify.success(`${name} added to your phonebook 🚀`);
    }

    setNumber('');
    setName('');
  };

  return (
    <Form onSubmit={onSubmitEvt}>
      <label>
        <P>Name</P>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        <P>Number</P>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="123-45-67"
          onChange={handleChange}
          value={number}
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};