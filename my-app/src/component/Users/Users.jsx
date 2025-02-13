import React from 'react';
import style from './Users.module.css'

const Users = ({ repo }) => {
  return (
    <div className={style.item}>
      <h2>{repo.name}</h2>
      {repo.description && <p>{repo.description}</p>}
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Перейти к репозиторию
      </a>
      <p>⭐ Звёзд: {repo.stargazers_count}</p>
      <p>Последнее обновление: {new Date(repo.updated_at).toLocaleDateString()}</p>
    </div>
  );
};

export default Users;


