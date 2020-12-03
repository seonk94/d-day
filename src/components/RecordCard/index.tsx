import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React from 'react';
import CatImage from '../../assets/images/preview/cat_1.jpg';
import AddCover from './AddCover';

interface Props {
  isEmpty? : boolean;
}

const useStyles = makeStyles({
  root : {
    position : 'relative'
  },
  header : {},
  media : {
    height : 0,
    paddingTop : '56.25%'
  }
});

function RecordCard({ isEmpty = false } : Props) {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader 
        className={classes.header}
        avatar={
          <Avatar>C</Avatar>
        }
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="고양이를 만난날..."
        subheader=". 2020-11-29"
      />
      <CardMedia
        className={classes.media}
        image={CatImage}
        title="Preview Img"
      />
      <CardContent>
        <Typography variant="body2" component="p" color="textSecondary">
          2020-11-29... 집에 가다가
        </Typography>
      </CardContent>
      {isEmpty && <AddCover/>}
    </Card>
  );
}
export default RecordCard;