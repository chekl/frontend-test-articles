import React from 'react';
import { Link } from 'react-router-dom';

import { Paper,
  Card,
  CardContent,
  CardMedia,
  CardActions, 
  Typography,
  ThemeProvider } from '@mui/material';

import {CalendarToday, EastOutlined} from '@mui/icons-material';

import dateTransform from '../../dateTransform/dateTransform';

import { theme } from '../../style/theme/theme';
import { linkStyle1, smallWidth, paperMargin, cardSize, dateStyle } from '../../style/styles'

type Props = {
  article: {
    imageUrl: string,
    publishedAt: string,
    title: string,
    summary: string
    id: number
  },
  id: number
}

export default function Cards({article, id}: Props) {
  return (
    <Paper key={id} sx={paperMargin} elevation={3}>
      <Card sx={cardSize}>
        <CardMedia
          component="img"
          height="217"
          width= "400"
          image={article.imageUrl}
          alt="article image"
        />
        <CardContent>
          <ThemeProvider theme={theme}>
            <Typography sx={dateStyle}>
                <CalendarToday />
                {dateTransform(article.publishedAt)}
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
                {article.title}
            </Typography>
            <Typography variant="body1" >
                { article.summary.length > 100
                  ?(String(article.summary).slice(0, 97) + "...") 
                  :article.summary}
            </Typography>
          </ThemeProvider>
        </CardContent>
        <CardActions>
         <Link style={linkStyle1} to={`/${article.id}`}>
            Read More 
            <EastOutlined sx={smallWidth}/>
          </Link>
        </CardActions>
      </Card>
    </Paper>
  );
}