import React from "react";
import s from './HeaderDown.module.css'

import headerImg from "../../../Assists/Img/books-5937823__340.png";
import $ from 'jquery';


const HeaderDownBelow = (props) => {
    return (
        <div className={s.headerDown + ` border-0`}>

            <div className="container-fluid px-0">
                <div className="row">

                    <div className="col-md-6 offset-6">
                        <img src={headerImg}
                             className={s.imgStyle} alt=""/>

                    </div>
                </div>
            </div>
            <div className={s.contents}>
                <div className={s.content__container}>
                    <p className={s.content__container__text}>
                        Salom
                    </p>


                    <ul className={s.content__container__list}>
                        <li className={s.content__container__list__item}>Abdulaziz !</li>
                        <li className={s.content__container__list__item}>Eldor !</li>
                        <li className={s.content__container__list__item}>Ustozlar !</li>
                        {/*<li className={s.content__container__list__item}>Humoyun !</li>*/}
                        <li className={s.content__container__list__item}>Nosirjon !</li>
                    </ul>
                </div>
            </div>

            <div className={`container ` + s.contenerLocation}>
                <p className={s.azz}>Siz Milliy Universitetining <br/> Amaliy matematika va intelektual <br/>texnologiyalar
                    fakulteti saytidasiz </p>

                <div className={`row justify-content-around`}>

                    <div className={`col-md-2 ` + s.cardSize + ` ` + s.card1}>
                        <div className="rounded-circle ml-auto mr-auto pt-2"
                             style={{height: "100px", width: "100px", border: "2px solid white"}}>
                            <svg fill="none" className="rubicons star" xmlns="http://www.w3.org/2000/svg" width="70"
                                 height="70" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
                                 style={{color: "white"}}>
                                <path d="M12 3l2.5 7h6.963L16 14l2 7-6-4.249L6 21l2-7-5.463-4H9.5L12 3z"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>

                        </div>
                        <h5>Curriculum</h5>
                        <hr width="35%" style={{borderTop: "2px solid white"}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxi
                            a</p>
                    </div>
                    <div className={`col-md-2 ` + s.cardSize + ` ` + s.card2}>
                        <div className="rounded-circle ml-auto mr-auto pt-1"
                             style={{height: "100px", width: "100px", border: "2px solid white"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="rubicons map-pin-location" width="80"
                                 height="80" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="1.5" fill="none" style={{color: "white"}}>
                                <path d="M12 13c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3z"
                                      stroke-linecap="round"></path>
                                <path d="M19 10c0 6-7 11-7 11s-7-5-7-11c0-3.866 3.134-7 7-7s7 3.134 7 7z"></path>
                            </svg>

                        </div>
                        <h5>Transportion</h5>
                        <hr width="35%" style={{borderTop: "2px solid white"}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxi
                            a</p>
                    </div>
                    <div className={`col-md-2 ` + s.cardSize + ` ` + s.card3}>
                        <div className="rounded-circle ml-auto mr-auto pt-2"
                             style={{height: "100px", width: "100px", border: "2px solid white"}}>

                            <svg fill="none" className="rubicons heart" xmlns="http://www.w3.org/2000/svg"
                                 width="80" height="80" viewBox="0 0 24 24" stroke="currentColor"
                                 stroke-width="1.5" style={{color: "white"}}>
                                <path
                                    d="M4.881 12.934C-.441 7.651 6.678.585 12 5.867c5.322-5.282 12.441 1.784 7.119 7.067L12 20l-7.119-7.066z"
                                    stroke-linecap="round"></path>
                                <path d="M16 7a2 2 0 012 2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>

                        </div>
                        <h5>Passionate Teaching</h5>
                        <hr width="35%" style={{borderTop: "2px solid white"}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxi
                            a</p>
                    </div>
                    <div className={`col-md-2 ` + s.cardSize + ` ` + s.card4}>
                        <div className="rounded-circle ml-auto mr-auto pt-1"
                             style={{height: "100px", width: "100px", border: "2px solid white"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="rubicons check" width="80"
                                 height="80" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"
                                 fill="none" style={{color: "white"}}>
                                <path d="M4 13l5 5L20 6" stroke-linecap="round"></path>
                            </svg>

                        </div>
                        <h5>Activities</h5>
                        <hr width="35%" style={{borderTop: "2px solid white"}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxi
                            a</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default HeaderDownBelow