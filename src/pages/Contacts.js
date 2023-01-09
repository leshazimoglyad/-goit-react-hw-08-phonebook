import { Box, ContactsContainer } from 'components/Style/Element.styled';
import { Filter } from 'components/Filter/Filter';
import { H1 } from 'components/Title/Title';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

const Contacts = () => {
  return (
    <ContactsContainer>
      <Box>
        <H1 title="Phonebook" />
        <ContactForm />
      </Box>
      <Box>
        <H1 title="Contacts" />
        <Filter title="Find contact by name" />
        <ContactList />
      </Box>
    </ContactsContainer>
  );
};
export default Contacts;