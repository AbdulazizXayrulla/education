import React from "react";
import s from './../Diologs.module.css'
import {NavLink} from "react-router-dom";






const DiologsItem = (props) => {
    return props.diologs.map((value) => <div className="diologs">

        <NavLink to={"/diologs/"+value.id} className="nav-link" activeClassName={s.activeLink}>{value.name}</NavLink>
    </div>)
}
export default DiologsItem