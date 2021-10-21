import React from "react";
import s from './HeaderMain.module.css'
import amiftIcon from '../../../Assists/Img/amiftIcon.jpg'
import headerImg from '../../../Assists/Img/student-3500990_1920.jpg'
import {NavLink} from "react-router-dom";
import HeaderDownBelow from "./HeaderDownBelow";



const HeaderDown = (props) => {

    return (
        <div className={s.headerDown}>
            <div className={`container `}>
                <nav className="navbar navbar-expand-sm justify-content-between">

                    <NavLink to="/education" className="navbar-brand">
                        <img src={amiftIcon} alt="" className={s.ImgSize}/>
                    </NavLink>


                    <ul className={`navbar-nav ` + s.ul}>
                        <li className="nav-item">
                            <NavLink to="/Home" className="nav-link" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/AboutUs" className="nav-link" href="#">About us</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/Curriculum" className="nav-link" href="#">Curriculum</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Staff" className="nav-link" href="#">Staffs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Testimonials" className="nav-link" href="#">Testimonials</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Enroling" className="nav-link" href="#">Enroling</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/News" className="nav-link" >News</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link" >Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/diologs" className="nav-link">Diologs</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>




        </div>
    )
}
export default HeaderDown