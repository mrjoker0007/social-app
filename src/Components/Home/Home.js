import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './Home.css';


const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])
    return (
        <div className="home">
        <CssBaseline />
        <Container maxWidth="auto">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto', width:'100%' }} >
        <Box textAlign="center" m={1}>
            <h1 className="header">Social App</h1>
      </Box>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </Typography>
        </Container>
        </div>
    );
};

export default Home;