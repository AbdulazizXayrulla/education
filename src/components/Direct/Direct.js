import React from "react";
import s from './Direct.module.css'
import Report from "./Report/Report";
import LatestNews from "./LatestNwes/LatestNews";
import OurTeacher from "./OurTeacher/OurTeacher";
import Middle from "./Middle/Middle";
import HeaderDownBelow from "./HeaderDown/HeaderDownBelow";
import MiddleNext from "./MiddleNext/MiddleNext";
import SecondBackBlue from "./SecondBackBlue/SecondBackBlue";
import OurPicture from "./OurPicture/OurPicture";
import Foot from "./Foot/Foot";
const Direct = (props) => {
    return (<span className={s.main}>
        <HeaderDownBelow/>
        <Report/>
        <LatestNews/>
        <OurTeacher/>
        <Middle/>
        <MiddleNext/>
        <SecondBackBlue/>
        <OurPicture/>
        <Foot/>
    </span>)
}
export default Direct