import React from 'react';
import styles from './Users.module.css'

const Users = ({ repo }) => {
  return (
    <div className={styles.repoCard}>
      <h2 className={styles.repoName}>{repo.name}</h2>
      {repo.description && <p className={styles.repoDescription}>{repo.description}</p>}
      <a className={styles.repoLink} href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Перейти к репозиторию
      </a>
      <p className={styles.repoStars}>⭐ Звёзд: {repo.stargazers_count}</p>
      <p className={styles.repoUpdated}>Последнее обновление: {new Date(repo.updated_at).toLocaleDateString()}</p>
    </div>
  );
};

export default Users;
