import React from 'react'
import { useParams, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Paper, Typography, ThemeProvider} from '@mui/material'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

import { selectById } from '../store/articles';

import { theme } from '../style/theme/theme';
import {textMatgin, containerStyle, imageStyle, paperPadding, titleStyle, smallWidth, linkStyle2} from '../style/styles'

type Props = {
  article: object
  imageUrl: string,
  title: string,
}

const Article = () => {  
  let { id } = useParams();
  const article: Props = useSelector(state => selectById(state, id))
  
  return (
    <div >
      <div style={containerStyle as React.CSSProperties}>
        <img 
          style={imageStyle as React.CSSProperties} 
          src={article.imageUrl} 
          alt="article" 
        />
      </div>
      <Paper elevation={3} sx={paperPadding}>
        <ThemeProvider theme={theme}>
          <Typography gutterBottom variant="h2" component="div" sx={titleStyle}> 
            {article.title} 
          </Typography>
          <Typography variant="body2" sx={textMatgin}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id ornare arcu odio. Dignissim cras tincidunt lobortis feugiat vivamus at augue. A lacus vestibulum sed arcu non odio euismod lacinia at. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Malesuada nunc vel risus commodo viverra maecenas. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Malesuada pellentesque elit eget gravida. Non sodales neque sodales ut etiam. Lacus luctus accumsan tortor posuere ac ut. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Vitae justo eget magna fermentum. Sed viverra ipsum nunc aliquet bibendum enim. Varius sit amet mattis vulputate enim nulla. Enim eu turpis egestas pretium.
          </Typography>
          <Typography variant="body2" sx={textMatgin}>
            Massa enim nec dui nunc mattis enim ut. Amet risus nullam eget felis eget nunc lobortis mattis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Pellentesque dignissim enim sit amet venenatis urna. Non sodales neque sodales ut etiam. Ultrices neque ornare aenean euismod elementum. Egestas fringilla phasellus faucibus scelerisque. In eu mi bibendum neque egestas congue quisque egestas diam. Aliquam sem fringilla ut morbi tincidunt. Tellus id interdum velit laoreet id. Velit sed ullamcorper morbi tincidunt ornare massa. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Morbi non arcu risus quis varius quam quisque id. Tempor orci eu lobortis elementum nibh tellus. Pellentesque nec nam aliquam sem et tortor consequat id. In massa tempor nec feugiat nisl pretium. Eget gravida cum sociis natoque penatibus et magnis.
          </Typography>
          <Typography variant="body2" sx={textMatgin}>
            Ornare lectus sit amet est placerat in egestas erat. Dolor sed viverra ipsum nunc. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. 
          </Typography>
        </ThemeProvider>
      </Paper>
      <Link to='..' relative="path" style={linkStyle2}>
        <KeyboardBackspaceOutlinedIcon sx={smallWidth}/>
        Back to homepage
      </Link>
    </div>
  )
}

export default Article
