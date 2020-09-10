import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Comments = (props) => {
    const classes = useStyles();
    const {name, body} = props.comment;
    return (
        <div  className={classes.root}>
            <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
                <Typography>
                {message}
                <p><strong> name: </strong> {name} <p>{body}</p></p>
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
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
  },
}));
const message = ``;

export default Comments;