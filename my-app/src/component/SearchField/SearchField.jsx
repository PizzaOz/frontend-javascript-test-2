import React, { useState } from 'react';

const SearchField = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div>
      <input
        type="text"
        autoFocus={true}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Введите имя пользователя GitHub"
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
};

export default SearchField;





























// import { useSelector } from 'react-redux'
// // import { fetchUsers } from '../../store/users-reducer'
// import Users from '../Users/Users'
// import style from './SearchField.module.css'
// import { useState } from 'react'



// const SearchField = (props) => {

    
//     // const dispatch = useDispatch()
//     const state = useSelector((state) => state.users)

//     const [name, setName] = useState('');
//     const [list, setList] = useState([]);

//     const fetch1 = async (text) => {
//         const response = await fetch(`https://api.github.com/users/${text}/repos?per_page=20`);
//         return response.json();
//     }

//     const inputField = (e) => {
//         setName(e.target.value)
        
//     }

//     const onClick = async () => {
//         const data = await fetch1(name);
//         setList(data);
//     }


//     if (state.isLoading) {
//         return <h1>Loding...</h1>
//     }

//     return (
//         <div className={style.body}>

//             <div>
//                 <input value={name} onChange={inputField} />
//             </div>
//             <div>
//                 <button onClick={onClick}>Fetch Users</button>
//             </div>

//             <div>
//                 {list.map(d => <Users
//                     name={d.name}
//                     description={d.description}
//                     html_url={d.html_url}
//                     watchers_count={d.watchers_count}
//                     updated_at={d.updated_at}
//                 />)}
//             </div>
//         </div>
//     )
// }



// export default SearchField

