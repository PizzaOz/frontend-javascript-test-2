import React from 'react';
import Users from '../Users/Users';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './RepoList.module.css';

const RepoList = ({ repos, fetchMoreRepos, hasMore }) => {
  if(repos.length === 0 ) {
    return
  }
    return (
      <div className={styles.repoList}>
      <InfiniteScroll
        dataLength={repos.length}
        next={fetchMoreRepos}
        hasMore={hasMore}
        loader={<h4 className={styles.loader}>Загрузка...</h4>}
        endMessage={<p className={styles.endMessage}>Вы просмотрели все репозитории</p>}
      >
        <div className={styles.repoContainer}>
          {repos.map((repo) => (
            <Users key={repo.id} repo={repo} />
          ))}
        </div>
      </InfiniteScroll>
      </div>
    );
  };
  
  export default RepoList;