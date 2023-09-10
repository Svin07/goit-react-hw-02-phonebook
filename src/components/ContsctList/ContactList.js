import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
// import { Component } from 'react';

function ContactList({ contacts, handleDelete, filter }) {
  return (
    <ul className={css.contactlist}>
      {(filter ?? contacts).map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ContactList;
