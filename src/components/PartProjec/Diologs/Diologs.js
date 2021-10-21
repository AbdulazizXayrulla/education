import React from "react";
import s from './Diologs.module.css'

import DiologsItem from "./DiologsItem/DiologsItem";
import Message from "./Messages/Messages";
import {addMessageActionCreatorPgm, UpdateNewPostTextActionCreatorPgm} from "../../../redux/diolog-reducer";



const Diologs = (props) => {



    const DiologsChanging = (e) => {
        props.DiologsChanging(e.target.value)
    }
    const AddMessage = () => {
        props.AddMessage()

    }
    return (<div className={s.main}>
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-2">

                    <DiologsItem diologs={props.state.diologs}/>


                </div>
                <div className="col-md-10">
                    <div className="message">
                        <Message messages={props.state.messages}/>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3 offset-2">
                    <textarea className="form-control"  onChange={DiologsChanging}
                              value={props.state.newMessage}/>
                    <button type="button" className="btn btn-success float-right mt-3" onClick={AddMessage}>Add</button>
                </div>


            </div>


        </div>
    </div>)
}
export default Diologs