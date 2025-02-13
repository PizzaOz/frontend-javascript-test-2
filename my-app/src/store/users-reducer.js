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
