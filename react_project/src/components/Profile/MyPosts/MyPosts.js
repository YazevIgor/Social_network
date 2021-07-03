import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.css'

const MyPosts = props => {
    let newPostRef = React.createRef();
    let newPost = () => {
        props.addPostCreateAction();
    }
    let newText = () => {
        let text = newPostRef.current.value;
        props.addDataPostTextCreateAction(text);
    }

    let posts = props.postsData.map(p => <Post posts = {p.post} key = {p.id}/>)
    return <div className={classes.wrapper}>
        <div className={classes.addPost}>
            <textarea onChange={newText} ref = {newPostRef} value={props.textData} />
            <button onClick={newPost}>Add post</button>
        </div>
        <div className={classes.post}>
            {posts}
        </div>

    </div>
}

export default MyPosts