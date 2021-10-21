import React from "react";
import s from './Foot.module.css'
import map from './../../../Assists/Img/Icons/placeholder.png'
import phone from './../../../Assists/Img/Icons/phone-call.png'
import mail from './../../../Assists/Img/Icons/email.png'
import NavLink from "reactstrap/lib/NavLink";


const Foot = () => {


    return (
        <div className={s.middle}>
            <div className="container-fluid pt-4">
                <div className="row">
                    <div className="col-md-12 bg-info" style={{height: '180px'}}></div>
                </div>

            </div>
            <div className="w-100" style={{height: '5px', backgroundColor: '#F8C067'}}></div>
            <div className="container-fluid">
                <div className="row" style={{backgroundColor: '#0F4794'}}>
                    <div className="col-md-4 pt-4">
                        <div className="text-light mb-3" style={{fontFamily: 'Century'}}><span
                            className="font-weight-bold display-4">Amaliy</span> <span
                            style={{fontSize: '24px'}}>Matematika</span> <br/>
                            <div className='d-inline-block mb-1 mx-2'
                                 style={{width: '240px', height: '5px', backgroundColor: '#F8C067'}}></div>
                            <span style={{fontSize: '20px'}}>fakulteti</span></div>
                        <div className="d-inline-block">
                            <NavLink className="text-light" style={{fontSize:'19px'}}
                                href="https://www.google.com/maps/place/41%C2%B020'44.1%22N+69%C2%B012'22.7%22E/@41.345576,69.206316,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d41.345576!4d69.206316"><img
                                src={map} alt="" />
                                Bizning universtitimizga tashrif buyuring!!!</NavLink>
                        </div>
                        <div className="d-inline-block">
                            <NavLink className="text-light" style={{fontSize:'19px'}}
                                     href="#"><img
                                src={phone} alt="" style={{width:'29px'}}/> +998-94-654-66-06
                                </NavLink>
                        </div>
                        <div className="d-inline-block mb-3">
                            <NavLink className="text-light" style={{fontSize:'19px'}}
                                     href="mailto:xayrullayevabdulaziz100@gmail.com " target="_blank"><img
                                src={mail} alt=""  className="mr-2"/>
                                xayrullayevabdulaziz100@gmail.com</NavLink>
                        </div>
                    </div>
                    <div className="col-md-4 pt-4">
                        <div className="text-light mb-3" style={{fontFamily: 'Century'}}> <span
                            style={{fontSize: '24px'}}>Tezkor <span className="ml-2" style={{color:'#F8C067'}}>Linklar</span></span>
                        </div>
                        <div className="d-inline-block">
                            <NavLink className="text-light" style={{fontSize:'19px'}}
                                     href="https://www.google.com/maps/place/41%C2%B020'44.1%22N+69%C2%B012'22.7%22E/@41.345576,69.206316,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d41.345576!4d69.206316"><img
                                src={map} alt="" />
                                Bizning universtitimizga tashrif buyuring!!!</NavLink>
                        </div>
                        <div className="d-inline-block">
                            <NavLink className="text-light" style={{fontSize:'19px'}}
                                     href="#"><img
                                src={phone} alt="" style={{width:'29px'}}/> +998-94-654-66-06
                            </NavLink>
                        </div>
                        <div className="d-inline-block mb-3">
                            <NavLink className="text-light" style={{fontSize:'19px'}}
                                     href="mailto:xayrullayevabdulaziz100@gmail.com " target="_blank"><img
                                src={mail} alt=""  className="mr-2"/>
                                xayrullayevabdulaziz100@gmail.com</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default Foot