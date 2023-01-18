import React from "react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useArticles } from "../hooks/useArticles";

import SearchField from "../components/SearchField/SearchField"
import ArticleList from '../components/ArticleList';

import { Divider, Typography, ThemeProvider } from '@mui/material';

import { AppDispatch } from "../store/store";
import { fetchData, selectAll, selectStatus} from '../store/articles'

import { theme } from "../style/theme/theme";
import { containerMargin } from "../style/styles";


function App() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(selectStatus)
  const article = useSelector(selectAll)
  const sortedArticles: any[] = useArticles(article, filter);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData())
    }
  }, [status, dispatch])
  
  return (
    <div>
      <SearchField filter={filter} setFilter={setFilter} />
      <div style={containerMargin}>
        <ThemeProvider theme={theme}>
          <Typography variant="subtitle1">
            Results: {sortedArticles.length} 
          </Typography>
        </ThemeProvider>
        <Divider/>          
      </div>
      <ArticleList articles = {sortedArticles} />
    </div>
  );
}

export default App;
