import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DiologReducer from "./diolog-reducer";
let reducers=combineReducers({
    ProfilePage:ProfileReducer,
    MessagesPage:DiologReducer
})

let store=createStore(reducers)
export default store

window.alert = store;