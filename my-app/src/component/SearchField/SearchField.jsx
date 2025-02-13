import React, { useState } from 'react';
import styles from './SearchField.module.css'

const SearchField = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        autoFocus={true}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Введите имя пользователя GitHub"
        className={styles.searchInput}
      />
      <button className={styles.searchButton} onClick={handleSearch}>Поиск</button>
    </div>
  );
};

export default SearchField;
