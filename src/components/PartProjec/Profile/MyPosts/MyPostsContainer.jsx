import React from 'react';
import Post from './Post/Post';
import {addMessageActionCreator, UpdateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import MyContext from "../../../../StoreContext";
import {connect} from "react-redux";



// const MyPostsContainer = (props) => {
//
//     return (<MyContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//
//                 let AddMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//
//                 }
//                 let UpdateNewPostText = (text) => {
//
//                     store.dispatch(UpdateNewPostTextActionCreator(text))
//                 }
//                 return <MyPosts AddMessage={AddMessage}
//                                 UpdateNewPostText={UpdateNewPostText}
//                                 state={state.ProfilePage}
//
//                 />
//
//
//             }
//             }
//
//         </MyContext.Consumer>
//
//     )
// }
const mapStateToProps=(state)=>{
   return {
       state: state.ProfilePage
   }
}
const mapDispatchToProps=(dispatch)=>{
   return {
       AddMessage: ()=>{dispatch(addMessageActionCreator())},
       UpdateNewPostText:(text)=>{dispatch(UpdateNewPostTextActionCreator(text))}
   }
}


const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;