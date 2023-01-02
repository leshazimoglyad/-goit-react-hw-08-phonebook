import { useSelector } from 'react-redux';

import { ContactsContainer, P } from 'components/Style/Element.styled';
import { Filter } from 'components/Filter/Filter';
//import { Box } from 'components/Box/Box';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { H1, H2 } from 'components/Title/Title';
import { ContactList } from 'components/ContactList/ContactList';

//const LS_KEY = 'contacts';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);

  //useEffect(() => {
  //  localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  //}, [contacts]);

  return (
    <ContactsContainer>
      <H1 title="Phonebook" />
      <Phonebook />
      {contacts.length > 0 ? (
        <>
          <H2 title="Contacts" />
          <Filter title="Find contact by name" />
          <ContactList />
        </>
      ) : (
        <P>Phonebook is empty</P>
      )}
    </ContactsContainer>
  );
};