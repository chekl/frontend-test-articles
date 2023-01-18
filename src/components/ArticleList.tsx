import React from 'react'

import { Grid } from '@mui/material'

import Card from "./Card/Card"

import { centerStyle } from '../style/styles'

type Props = {
  id: number,
  imageUrl: string,
  publishedAt: string,
  title: string,
  summary: string
}

const ArticleList = ({ articles }: any) => {
    if(!articles.length) {
        return(
            <h1 style={centerStyle as React.CSSProperties}>
              Articles weren`t found!
            </h1>
        )
    }
    return (
      <Grid container  direction="row" columns={3}>
        {articles.map((article: Props) => 
            <Card article={article} id={article.id} key={article.id}/>
        )}
      </Grid>
  )
}

export default ArticleList
