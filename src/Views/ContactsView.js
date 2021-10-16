import Contacts from '../components/Contacts';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';

  function ContactsView() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Contacts />

      <Filter />
    </>
  );
}
export {ContactsView}