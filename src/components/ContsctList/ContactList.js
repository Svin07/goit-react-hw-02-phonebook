import css from './ContactList.module.css';

export default function ContactList({ name }) {
  return (
    <li className={css.contactlist}>
      <p>{name}</p>
    </li>
  );
}
