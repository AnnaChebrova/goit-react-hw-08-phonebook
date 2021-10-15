import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact as deleteContactThunk } from '../redux/thunk';
import { getContactsSelector } from '../redux/Selectors/contacts-selectors';
import { getContacts as getContactsThunk } from '../redux/thunk';

import styles from './phonebook.module.css';

function Contacts() {
  const dispatch = useDispatch();

  const items = useSelector(getContactsSelector);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <div className={styles.list}>
      {items &&
        items.map(item => (
          <p key={item.id} className={styles.contact}>
            {item.name}: {item.number}
            <button
              type="button"
              onClick={() => deleteContact(item.id)}
              className={styles.btnList}
            >
              delete contact
            </button>
          </p>
        ))}
    </div>
  );
}

export default Contacts;
