const UPDATE_NEW_POST_TEXT_PGM = 'UPDATE-NEW-POST-TEXT_PGM';
const ADD_MESSAGE_PGM = 'ADD-MESSAGE_PGM';


let initialState={
    diologs: [
        {id: 1, name: 'Abdulaziz'},
        {id: 2, name: 'Abbos'},
        {id: 3, name: 'Ahmadjon'},
        {id: 4, name: 'Sanajar'},
        {id: 5, name: 'Mirzabek'},
        {id: 6, name: 'Eldor'},
        {id: 7, name: 'Sardor'},
    ],
    messages: [
        {text: "hello"},
        {text: "How are you"},
        {text: "What is happened"},

    ],
    newMessage:'Salom bro'
}

const DiologReducer=(state=initialState,action)=>{
    if(action.type===UPDATE_NEW_POST_TEXT_PGM){
        state.newMessage=action.textPgm
        // this._callSubscriber()
    }
    if(action.type===ADD_MESSAGE_PGM){
        state.messages.push({text:state.newMessage})
        state.newMessage="";
        // this._callSubscriber()
    }
    return state;
}
export default DiologReducer
export const addMessageActionCreatorPgm = () => {

    return {
        type: ADD_MESSAGE_PGM
    }
}
export const UpdateNewPostTextActionCreatorPgm = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT_PGM,
        textPgm: text
    }
}