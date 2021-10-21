const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState={
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    NewPostText: 'Abdulaziz'
}
const ProfileReducer=(state=initialState,action)=>{


    if (action.type === ADD_MESSAGE) {
        let newInfo = {
            id: 5, message: state.NewPostText, likesCount: 45
        }
        state.posts.push(newInfo);
        state.NewPostText = '';
        // this._callSubscriber(this._state)
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
        state.NewPostText = action.text;

        // this._callSubscriber(this._state)
    }
    return state;
}
export default ProfileReducer
export const addMessageActionCreator = () => {

    return {
        type: ADD_MESSAGE
    }
}
export const UpdateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}