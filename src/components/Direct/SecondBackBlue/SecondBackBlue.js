import React from "react";
import s from './SecondBackBlue.module.css'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const SecondBackBlue = () => {


    return (
        <div className={s.middle}>
            <div className="container pt-4">
                <div className="row pt-5">
                    <div className="col-md-12 text-center text-light">
                        <h1>
                            Yangi tashrif buyurganlar, shoshiling va ro'yhatdan o'ting <br/>yozgi mavsumni o'tkazib
                            yubormang
                        </h1>
                        <button className="btn btn-outline-light mt-2">Ro'yxatdan o'tish</button>

                    </div>

                </div>

            </div>
        </div>)
}
export default SecondBackBlue