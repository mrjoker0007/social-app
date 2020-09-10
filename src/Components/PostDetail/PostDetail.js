import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Photos from '../Photos/Photos';
import Photo from '../FakePhoto/Photo';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './PostDetail.css'


const PostDetail = () => {
    const {postId} = useParams();
    const [photo, setPhoto] = useState(Photo);
    const [postDetail, setPostDetail] = useState([]);
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data)) 
       
    }, [])
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        // console.log(commentUrl)
        fetch(commentUrl)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])
    const detailStyle={
        marginLeft: '5vh',
        padding: '5px'
    }
    return (
        <div className="postDetail" style={detailStyle} >
        {/* <CssBaseline /> */}
        <Container maxWidth="100%">
          <Typography component="div" style={{ height: '50%', padding:'30px', color:'white'}} > 
          <h4>Post Details:</h4>
            <p>{postDetail.body}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis quos dignissimos, asperiores odio voluptate sunt nam itaque unde eligendi nisi nulla assumenda inventore quod, harum commodi autem in fuga.</p>
            <h5 className="comment">Post Comments:</h5>
          </Typography>
        </Container>
        <div className="commentSection">
        <div className="photo">
           {
                 photo.map(photo => <Photos photo={photo}></Photos>)
             }
             </div>
             <div className="comments">
            {
                 comment.map(comment => <Comments comment={comment}
                 ></Comments>)
             }
             </div>
        </div>
        </div>
    );
};

export default PostDetail;