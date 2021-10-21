import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addMessageActionCreator, UpdateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const MyPosts = (props) => {


    let postsElements =
        props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newText = React.createRef();
    let AddMessage = () => {
        props.AddMessage();

    }
    let UpdateNewPostText = () => {

        props.UpdateNewPostText(newText.current.value);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className="w-25">
                    <textarea className="form-control" onChange={UpdateNewPostText} ref={newText}
                              value={props.state.NewPostText}></textarea>
                </div>
                <div className="w-25">
                    <button className="btn btn-info mt-3 float-right" onClick={AddMessage}>Add post</button>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;