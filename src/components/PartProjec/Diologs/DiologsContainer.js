import React from "react";

import {addMessageActionCreatorPgm, UpdateNewPostTextActionCreatorPgm} from "../../../redux/diolog-reducer";
import Diologs from "./Diologs";
import MyContext from "../../../StoreContext";
import {connect} from "react-redux";




// const DiologsContainer = (props) => {
//
//
//
//     return (
//         <MyContext.Consumer>
//             {store=> {
//                     let state=store.getState()
//                     const DiologsChanging = (text) => {
//                         store.dispatch(UpdateNewPostTextActionCreatorPgm(text))
//                     }
//                     const AddMessage = () => {
//                         store.dispatch(addMessageActionCreatorPgm())
//
//                     }
//                   return  <Diologs DiologsChanging={DiologsChanging}
//                              AddMessage={AddMessage}
//                              state={state.MessagesPage}
//
//                     />
//                 }}
//         </MyContext.Consumer>
//     )
// }
// this case cause i installed react-redux library
const mapStateToProps=(state)=>{
    return {
        state:state.MessagesPage
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        DiologsChanging:(text)=>{dispatch(UpdateNewPostTextActionCreatorPgm(text))},
        AddMessage:()=>{dispatch(addMessageActionCreatorPgm())}
    }
}

const DiologsContainer=connect(mapStateToProps,mapDispatchToProps)(Diologs)
export default DiologsContainer