import { useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { addContact as addContactThunk } from '../redux/thunk';
import { getContactsErrorSelector } from '../redux/Selectors/contacts-selectors';
import styles from './phonebook.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const error = useSelector(getContactsErrorSelector);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    dispatch(addContactThunk(newContact));

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <>
          <label>
            {' '}
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              className={styles.inputName}
              value={name}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Tel
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр может содержать пробелы, тире, круглые скобки и может начинаться с +"
              className={styles.inputTel}
              value={number}
              onChange={handleInputChange}
              required
            />
          </label>

          <button type="submit" className={styles.btnForm}>
            Add contact
          </button>
        </>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ContactForm;
