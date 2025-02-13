import React from 'react';
import Users from '../Users/Users';
import InfiniteScroll from 'react-infinite-scroll-component';


const RepoList = ({ repos, fetchMoreRepos, hasMore }) => {
  if(repos.length === 0 ) {
    return
  }
    return (
      <InfiniteScroll
        dataLength={repos.length}
        next={fetchMoreRepos}
        hasMore={hasMore}
        loader={<h4>Загрузка...</h4>}
        endMessage={<p>Вы просмотрели все репозитории</p>}
      >
        <div>
          {repos.map((repo) => (
            <Users key={repo.id} repo={repo} />
          ))}
        </div>
      </InfiniteScroll>
    );
  };
  
  export default RepoList;