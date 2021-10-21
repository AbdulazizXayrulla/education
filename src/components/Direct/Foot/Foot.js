import React from "react";
import s from './Foot.module.css'
import map from './../../../Assists/Img/Icons/placeholder.png'
import phone from './../../../Assists/Img/Icons/phone-call.png'
import mail from './../../../Assists/Img/Icons/email.png'
import NavLink from "reactstrap/lib/NavLink";


const Foot = () => {


    return (
        <div className={s.middle}>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-12" style={{height: '180px',backgroundColor:'#0F4794',opacity:'.7'}}></div>
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
                                 style={{width: '240px', height: '3px', backgroundColor: '#F8C067'}}></div>
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
                    <div className="col-md-4 pt-5 px-5">
                        <div className="text-light mb-3 text-right" style={{fontFamily: 'Century'}}> <span
                            style={{fontSize: '24px'}}>Tezkor <span className="ml-2" style={{color:'#F8C067'}}>Linklar</span></span>
                            <div className='d-inline-block mb-1 mx-2'
                                 style={{width: '240px', height: '3px', backgroundColor: '#fff'}}></div>
                        </div>
                        <div className="text-right">
                            <NavLink className="text-light d-inline-block" style={{fontSize:'17px'}}
                                     href="#">
                               Education
                            </NavLink>
                            <NavLink className="text-light d-inline-block" style={{fontSize:'17px'}}
                                     href="#">
                                About us
                            </NavLink>
                        </div>
                        <div className="text-right">
                            <NavLink className="text-light d-inline-block" style={{fontSize:'17px'}}
                                     href="#">
                                Staff
                            </NavLink>
                            <NavLink className="text-light d-inline-block" style={{fontSize:'17px'}}
                                     href="#">
                                About us
                            </NavLink>
                        </div>
                        <div className="text-right">
                            <NavLink className="text-light d-inline-block" style={{fontSize:'17px'}}
                                     href="#">
                                Enrollment
                            </NavLink>

                        </div>
                        <div className="text-right">
                            <NavLink className="text-light d-inline-block" style={{fontSize:'17px'}}
                                     href="#">
                               Our teachers
                            </NavLink>

                        </div>

                    </div>
                    <div className="col-md-4 pt-5 pl-5 pr-5 mb-4">
                        <div className="text-light mb-3 text-right" style={{fontFamily: 'Century'}}> <span
                            style={{fontSize: '24px'}}>Ochiq <span className="ml-3" style={{color:'#F8C067'}}>Soatlar</span></span>
                            <div className='d-inline-block mb-1 mx-2'
                                 style={{width: '240px', height: '3px', backgroundColor: '#fff'}}></div>
                        </div>
                        <div className="">
                            <NavLink className="text-light" style={{fontSize:'17px'}}
                                     href="#">
                                Dushanbadan Jumagacha: 4Am dan 5Pm gacha
                            </NavLink>

                        </div>
                        <div className="">
                            <NavLink className="text-light" style={{fontSize:'17px'}}
                                     href="#">
                                Shanba: 4Am dan 2Pm gacha
                            </NavLink>

                        </div>
                        <div className="">
                            <NavLink className="text-light" style={{fontSize:'17px'}}
                                     href="#">
                                Yakshanba: Yopiq
                            </NavLink>

                        </div>


                    </div>
                </div>
            </div>
        </div>)
}
export default Foot