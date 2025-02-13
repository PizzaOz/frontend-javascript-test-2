import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  repos: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};

export const fetchRepos = createAsyncThunk(
  'repos/fetchRepos',
  async ({ username, page }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        params: { page, per_page: 20 },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue('Пользователь не найден или произошла ошибка');
    }
  }
);

const repoSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      state.loading = false;
      state.repos = [...state.repos, ...action.payload];
      state.page += 1;
      state.hasMore = action.payload.length === 20;
    })
    builder.addCase(fetchRepos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default repoSlice.reducer;



















// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



// const initialState = {
//     isLoding: false,
//     data: null,
//     isError: false,
//     name: ''
// }

// export const fetchUsers = createAsyncThunk('fetchUsers', )

// const usersReducer = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         addName: (state, action) => ({...state, status: action.status})
//     },
// extraReducers: (builder) => {
//     builder.addCase(fetchUsers.pending, (state, action) => {
//         state.isLoding = true;
//     })
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//         state.isLoding = false;
//         state.data = action.payload
//     })
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//         console.log('Error', action.payload);
//         state.isError = true
// //     })
// },


// })



// export default usersReducer.reducer;
// const usersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_USER:
//             return { ...state, users: action.users }
//         case SET_INPUT:
//             return { ...state, input: action.input }
//         default:
//             return state
//     }
// }

// // export const setStatus = (status) => ({ type: SET_STATUS, status });

// export const setUser = (users) => ({ type: SET_USER, users });
// export const setInput = (input) => ({ type: SET_INPUT, input });





// const [status, setStatus ] = useState(props.users)

// useEffect(()=> async ()=> {
//     let areaUsers  = await getUsers();
//     const dataUser = areaUsers.map(d => [d.description, d.name, d.html_url, d.watchers_count, d.updated_at]);
//     setStatus(dataUser)
// },[])

// const onStatusChange = (e) => {
//     setInput(e.currentTarget.value)
// }