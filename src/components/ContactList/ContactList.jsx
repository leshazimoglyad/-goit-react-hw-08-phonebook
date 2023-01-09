import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactSlice';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { getFilter } from 'redux/filter/filterSlice';
import {
  Button,
  ContactItem,
  Contacts,
  ContactTxt,
} from 'components/Style/Element.styled';
import { FaUserAlt } from 'react-icons/fa';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const currentFilter = useSelector(getFilter);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const delContact = e => {
    const id = e.currentTarget.id;
    dispatch(deleteContact(id));
  };

  const filtredContacts = () => {
    const toLowCaseFilter = currentFilter.toLocaleLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(toLowCaseFilter)
    );
  };
  const visibleContacts = filtredContacts();

  return (
    <Contacts>
      {isLoading && <Loader />}
      {error && Notiflix.Notify.info({ error })}
      {visibleContacts.map(el => (
        <ContactItem key={el.id}>
          <FaUserAlt />
          <ContactTxt>
            {el.name} : {el.number}
          </ContactTxt>
          <Button id={el.id} type="button" onClick={delContact}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  currentFilter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};