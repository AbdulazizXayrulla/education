import React from "react";
import s from './Middle.module.css'
import CountUp  from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Middle =()=> {


        return(
        <div className={s.middle}>
        <div className="container pt-4">
            <div className="row pt-5">
                <div className="col-md-4">
                    <h1 className="text-center text-light">Talabalar <br/>soni</h1>
                    <br/>
                    <h1 className="text-center text-success mt-4"><CountUp start={0} end={1715} redraw={true} duration={3}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp></h1>

                </div>
                <div className="col-md-4">
                    <h1 className="text-center text-light">O'qtuvchilar <br/>soni </h1>
                    <br/>
                    <h1 className="text-center text-success mt-4"><CountUp start={0} end={427} redraw={true} duration={3}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp></h1>

                </div>
                <div className="col-md-4">
                    <h1 className="text-center text-light">Universetet <br/> yoshi</h1>
                    <br/>
                    <h1 className="text-center text-success mt-4"><CountUp start={0} end={127} redraw={true} duration={3}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp></h1>

                </div>
            </div>

        </div>
    </div>)
}
export default Middle