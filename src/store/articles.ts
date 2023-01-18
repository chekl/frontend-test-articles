import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('articles/fetchData', async () => {
  const url: string = 'https://api.spaceflightnewsapi.net/v3/articles';
  return await fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json' 
    }
  }).then(response => response.json())
  .then(data => data)
})

interface ArticleState {
  articles: any[],
  status: string,
  error: string | undefined
}

const initialState: ArticleState = {
  articles: [],
  status: 'idle',
  error: undefined
}

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle(state, action: PayloadAction<any[]>) : void {
        state.articles.push(action.payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = 'succeeded'
        state.articles = state.articles.concat(action.payload)
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { addArticle } = articleSlice.actions

export default articleSlice.reducer

export const selectAll = (state: { articles: any; }) => state.articles

export const selectById = (state: any, id: string) =>
  state.articles.find((article: { id: number; }) => article.id === +id)

export const selectStatus = (state: any) => state.status