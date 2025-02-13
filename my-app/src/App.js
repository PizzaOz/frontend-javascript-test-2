import { useDispatch, useSelector } from "react-redux";
import RepoList from "./component/RepoList/RepoList";
import SearchField from "./component/SearchField/SearchField";
import { fetchRepos } from "./store/users-reducer";
import { useState } from "react";


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
    <div className="app">
      <h1>Поиск репозиториев GitHub</h1>
      <SearchField onSearch={handleSearch} />
      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}
      <RepoList repos={repos} fetchMoreRepos={fetchMoreRepos} hasMore={hasMore} />
    </div>
  );
};

export default App;














// import RepoList from "./component/RepoList/RepoList";
// import Search from "./component/SearchField/SearchField";
// import SearchField from "./component/SearchField/SearchField";





// function App() {
//   return (
//     <div>
// <Search/>
// <RepoList />
//     </div>
//   );
// }

// export default App;
