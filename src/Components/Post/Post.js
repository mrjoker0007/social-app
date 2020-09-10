import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Post.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

 const Post = (props) => {
    const {title, id } = props.post;
    const classes = useStyles();
    return (
       <div  className={classes.root}>
         <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography>
            <h1>Post {id}</h1>
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.....</p>{message}
            <p><Link className='button' to={`/post/${id}`}>
            <Button  variant="contained" color="primary">Show detail post</Button>
            </Link></p>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      </div>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 700,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(3),
    },
  }));
const message = ``;

export default Post;