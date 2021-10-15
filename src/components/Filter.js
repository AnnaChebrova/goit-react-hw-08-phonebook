import styles from './phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useCallback } from 'react';
import { getFilteredContactsSelector } from '../redux/Selectors/contacts-selectors';
import { updateQuery } from '../redux/contactsSlice';

function Filter() {
  const dispatch = useDispatch();
  const filteredItems = useSelector(getFilteredContactsSelector);

  const [query, setQuery] = useState('');

  const handleChange = useCallback(e => {
    setQuery(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    dispatch(updateQuery(query));
  }, [dispatch, query]);

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className={styles.inputFilter}
        />
        <button onClick={handleSearch} className={styles.btnFilter}>
          Найти контакт
        </button>
      </label>
      {query &&
        filteredItems.map(item => (
          <p key={item.id}>
            {item.name}: {item.number}
          </p>
        ))}
    </div>
  );
}

export default Filter;
