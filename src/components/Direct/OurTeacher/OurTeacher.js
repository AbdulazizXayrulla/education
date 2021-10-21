import React from "react";
import s from './OurTeacher.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ustoz1 from '../../../Assists/Img/ustoz1.jpg'
import ustoz2 from '../../../Assists/Img/ustoz2.jpg'
import ustoz4 from '../../../Assists/Img/ustoz4.jpg'
import ustoz5 from '../../../Assists/Img/ustoz5.jpg'
import ustoz6 from '../../../Assists/Img/ustoz6.jpg'
import ustoz7 from '../../../Assists/Img/ustoz7.jpg'
import men from '../../../Assists/Img/i_am1.jpg'

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 4
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};
const OurTeacher = () => {
    return (<div className={s.main + ` container`}>
        <div className="row">
            <div className="col-md-12 mt-5">
                <h2 style={{color: "#114EA6",}}>Bizning Ustozlarimiz</h2>
                <b>Ishni nimadan boshlasa foydaliroq</b>
                <br/>
                <br/>
                <div className={s.borderMain}>

                </div>
                <p className="mb-2"></p>
                <div className={s.borderMain1}>

                </div>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-md-12 px-4">
                <Carousel className="pb-5" responsive={responsive} autoPlay={true} infinite={true} showDots={true}>
                    <div className={s.item}>
                        <img src={ustoz4} alt="" width="200px" height="150px"/>
                        <div className={s.substring}>
                            <h5>Inomjon Majidov</h5>
                            <p>Rektor</p>
                        </div>
                    </div>

                    <div className={s.item}>
                        <img src={ustoz2} alt="" width="200px" height="150px"/>
                        <div className={s.substring}>
                            <h5>Avazjon Marahimov</h5>
                            <p>Sobiq Rektor</p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <img src={ustoz1} alt="" width="200px" height="150px"/>
                        <div className={s.substring}>
                            <h5>Baxtiyor Egamov</h5>
                            <p>Prorektor</p>
                        </div>
                    </div>

                    <div className={s.item}>
                        <img src={ustoz5} alt="" width="200px" height="150px"/>
                        <div className={s.substring}>
                            <h5>Obidjon Bozorov</h5>
                            <p>O'qtuvchi</p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <img src={ustoz6} alt="" width="200px" height="150px"/>
                        <div className={s.substring}>
                            <h5>Kurator</h5>
                            <p>Kurator</p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <img src={ustoz7} alt="" width="200px" height="150px"/>
                        <div className={s.substring}>
                            <h5>Ro'zimurod aka</h5>
                            <p>Magistir</p>
                        </div>
                    </div>
                    <div className={s.item}>
                        <img src={men} alt="" width="200px" height="150px"/>
                        <div className={s.substring}>
                            <h5>Xayrullayev Abdulaziz</h5>
                            <p>Talaba</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>

    </div>)
}
export default OurTeacher