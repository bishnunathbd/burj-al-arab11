import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import WcIcon from '@material-ui/icons/Wc';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Room = ({ room }) => {
  const { title, description, imgUrl, bed, capacity, bedType, price, avatar } = room;

  const history = useHistory();

  const handleBook = (bedType) => {
    history.push(`/book/${bedType}`);
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatar}
          </Avatar>
        }
        title={title}
      />
      <CardMedia
        className={classes.media}
        image={imgUrl}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LocalHotelIcon />: {bed}
        </IconButton>
        <IconButton aria-label="share">
          <WcIcon />: {capacity}
        </IconButton>
        <IconButton aria-label="price">
          <AttachMoneyIcon />: {price}
        </IconButton>
        <Button onClick={() => handleBook(bedType)} variant="contained" color="primary">
          Book
        </Button>
      </CardActions>

    </Card>
  );
};

export default Room;