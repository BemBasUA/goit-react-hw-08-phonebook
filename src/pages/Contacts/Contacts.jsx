import { Box } from '../../components/Box/Box';
import { Form } from '../../components/Form/Form';
import { Filter } from '../../components/Form/Filter/Filter';
import { ContactList } from '../../components/Form/ContactList/ContactList';
import shortid from 'shortid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const handleSubmit = (name, number) => {
    const contact = {
      name,
      phone: number,
      id: shortid.generate(),
    };

    const contactNames = contacts.map(({ name }) => name);

    if (!contactNames.includes(contact.name)) {
      dispatch(addContact(contact));
    } else {
      alert(contact.name + ' is already in contacts.');
    }
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box className="ml-4">
      <h1 className="text-3xl mb-4">Phonebook</h1>
      <Form onSubmit={handleSubmit}></Form>
      <Filter></Filter>
      <h2>Contacts</h2>
      <ContactList data={visibleContacts} onClick={deleteContact}></ContactList>
    </Box>
  );
};
