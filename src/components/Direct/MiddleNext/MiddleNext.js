import React from "react";
import s from './MiddleNext.module.css'
import Collapsible from 'react-collapsible';
import iconUser from '../../../Assists/Img/Icons/user.png'
import iconCall from '../../../Assists/Img/Icons/phone-call.png'
import iconPencil from '../../../Assists/Img/Icons/pencil.png'
import iconEmail from '../../../Assists/Img/Icons/email.png'


const MiddleNext = () => {
    return (<div className={s.middleNext}>
        <div className="container mt-5 pt-5 ">
            <div className="row">
                <div className="col-md-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 style={{color: "#114EA6",}}>Tez-tez so'raladigan savollar</h2>
                                <b>Savollarning ba'zilariga javobllar</b>
                                <br/>
                                <br/>
                                <div className={s.borderMain}>

                                </div>
                                <p className="mb-2"></p>
                                <div className={s.borderMain1}>

                                </div>
                            </div>
                        </div>
                        <div className="row w-100 pt-4 px-3">
                            <Collapsible trigger="Hujjat topshirishning oxirgi qachon?"
                                         contentInnerClassName={s.opened}
                                         className="w-75 mb-2 bg-success rounded pt-1 pb-1"
                                         openedClassName="w-75 mb-2 bg-info rounded pt-1 pb-1"

                                         triggerOpenedClassName="px-4 pt-1 pb-1   font-italic font-weight-bold"
                                         triggerClassName="px-4 pt-1 pb-1 font-italic font-weight-bold"
                                         triggerStyle={{lineHeight: "4"}}>

                                <p>
                                    This is the collapsible content. It can be any element or React
                                    component you like.
                                </p>
                                <p>
                                    It can even be another Collapsible component. Check out the next
                                    section!
                                </p>
                            </Collapsible>
                            <Collapsible trigger="Farzandimni o'qishga qo'yish tartibi?"
                                         contentInnerClassName={s.opened}
                                         className="w-75 mb-2 bg-success rounded pt-1 pb-1"
                                         openedClassName="w-75 mb-2 bg-info rounded pt-1 pb-1"
                                         triggerStyle={{lineHeight: "4"}}
                                         triggerOpenedClassName="px-4 pt-1 pb-1   font-italic font-weight-bold"
                                         triggerClassName="px-4 pt-1 pb-1 font-italic font-weight-bold"
                            >
                                <p>
                                    This is the collapsible content. It can be any element or React
                                    component you like.
                                </p>
                                <p>
                                    It can even be another Collapsible component. Check out the next
                                    section!
                                </p>
                            </Collapsible>
                            <Collapsible trigger="To'liq kurs narxi qancha?"
                                         contentInnerClassName={s.opened}
                                         className="w-75 mb-2 bg-success rounded pt-1 pb-1"
                                         openedClassName="w-75 mb-2 bg-info rounded pt-1 pb-1"
                                         triggerStyle={{lineHeight: "4"}}
                                         triggerOpenedClassName="px-4 pt-1 pb-1   font-italic font-weight-bold"
                                         triggerClassName="px-4 pt-1 pb-1 font-italic font-weight-bold">
                                <p>
                                    This is the collapsible content. It can be any element or React
                                    component you like.
                                </p>
                                <p>
                                    It can even be another Collapsible component. Check out the next
                                    section!
                                </p>
                            </Collapsible>
                            <Collapsible trigger="Har bir bosqich uchun yosh chegarasi"
                                         contentInnerClassName={s.opened}
                                         className="w-75 mb-2 bg-success rounded pt-1 pb-1"
                                         openedClassName="w-75 mb-2 bg-info rounded pt-1 pb-1"
                                         triggerStyle={{lineHeight: "4"}}
                                         triggerOpenedClassName="px-4 pt-1 pb-1   font-italic font-weight-bold"
                                         triggerClassName="px-4 pt-1 pb-1 font-italic font-weight-bold ">
                                <p>
                                    This is the collapsible content. It can be any element or React
                                    component you like.
                                </p>
                                <p>
                                    It can even be another Collapsible component. Check out the next
                                    section!
                                </p>
                            </Collapsible>


                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 style={{color: "#114EA6",}}>Biz bilan aloqa</h2>
                                <b>Sizdan iltimos savol berayotganingizda uyalmang!!!</b>
                                <br/>
                                <br/>
                                <div className={s.borderMain}>

                                </div>
                                <p className="mb-2"></p>
                                <div className={s.borderMain1}>

                                </div>
                            </div>
                        </div>
                        <div className="row pt-4 px-3 d-block">
                            <form>
                            <div className="d-flex mb-3">
                                <div className="px-2 pt-2  text-center rounded" style={{backgroundColor:"#104EA3",width:'50px',height:'50px'}}>
                                    <img src={iconUser} alt="" width="25px"/>
                                </div>
                                <div className="ml-2 w-75">
                                    <input type="text" className="form-control h-100" placeholder="Number is here"/>

                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="px-2 pt-2  text-center rounded" style={{backgroundColor:"#104EA3",width:'50px',height:'50px'}}>
                                    <img src={iconCall} alt="" width="25px"/>
                                </div>
                                <div className="ml-2 w-75">
                                    <input type="text" className="form-control h-100" placeholder="Phone Number"/>

                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="px-2 pt-2  text-center rounded" style={{backgroundColor:"#104EA3",width:'50px',height:'50px'}}>
                                    <img src={iconEmail} alt="" width="25px"/>
                                </div>
                                <div className="ml-2 w-75">
                                    <input type="text" className="form-control h-100" placeholder="Email"/>

                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="px-2 pt-2  text-center rounded" style={{backgroundColor:"#104EA3",width:'50px',height:'50px'}}>
                                    <img src={iconPencil} alt="" width="25px"/>
                                </div>
                                <div className="ml-2 w-75">
                                    <input type="text" className="form-control h-100" placeholder="Ask whatever you want :)"/>

                                </div>
                            </div>
                            <div className="d-flex mb-3 flex-row-reverse px-3">

                                <div className="px-5">
                                    <button type="submit" className="btn h-100 btn-warning" placeholder="Ask whatever you want :)">Send</button>

                                </div>
                            </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>)
}
export default MiddleNext