import React from "react";
import s from './../Diologs.module.css'





const Message =(props)=>{


    return props.messages.map((value) => <div>{value.text}</div>)
}



export default Message