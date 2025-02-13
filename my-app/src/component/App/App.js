import { useDispatch, useSelector } from "react-redux";
import RepoList from "../RepoList/RepoList";
import SearchField from "../SearchField/SearchField";
import { fetchRepos } from "../../store/users-reducer";
import { useState } from "react";
import styles from './App.module.css';


const App = () => {
  const { repos, loading, error, page, hasMore } = useSelector((state) => state.repos);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleSearch = (searchUsername) => {
    setUsername(searchUsername);
    dispatch(fetchRepos({ username: searchUsername, page: 1 }));
  };

  const fetchMoreRepos = () => {
    if (username) {
      dispatch(fetchRepos({ username, page: page + 1 }));
    }
  };

  return (
    <div div className={styles.app}>
      <h1 className={styles.title}>Поиск репозиториев GitHub</h1>
      <SearchField onSearch={handleSearch} />
      {loading && <p className={styles.loading}>Загрузка...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <RepoList repos={repos} fetchMoreRepos={fetchMoreRepos} hasMore={hasMore} />
    </div>
  );
};

export default App;
