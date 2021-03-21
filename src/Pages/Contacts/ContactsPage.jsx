import ContactsForm from './Components/ContactsForm/ContactsForm';
import ContactsList from './Components/ContactsList/ContactsList';
import { useSelector } from 'react-redux';

const ContactsPage = () => {
  const contactsState = useSelector((state) => state.contacts);

  return (
    <div className="flex-center-column">
      <h1>Contacts Page</h1>
      <div className="flex-center-column w50">
        <ContactsForm />
        <ContactsList data={contactsState.contacts} />
      </div>
    </div>
  );
};

export default ContactsPage;
