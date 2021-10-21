import React from "react";
import s from './LatestNews.module.css'
import rasm1 from '../../../Assists/Img/Без названия.jpg'
import rasm2 from '../../../Assists/Img/images.jpg'
import rasm3 from '../../../Assists/Img/rasm3.jpg'
import rasm4 from '../../../Assists/Img/rasm4.jpg'
import rasm5 from '../../../Assists/Img/rasm5.jpg'
const LatestNews = (props) => {
    return (<div className={s.main + ` mt-5 pt-5`}>
        <div className="container pt-3">
            <div className="row">
                <div className="col-md-12">
                    <h2 style={{color: "#114EA6",}}>Qisqa Ma'lumotlar</h2>
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
            <div className="row">
                <div className="col-md-6 mt-4">
                    <div className="card">
                        <div className="card-body p-0">
                            <img src={rasm1} alt="" className="w-100 h-100"/>
                        </div>
                        <div className={`card-footer ` + s.back}>
                            <div className="d-flex">
                                <div className={s.square}>
                                    <h6>10th</h6>
                                    <h6>OCT</h6>

                                </div>
                                <div className="pt-2 pl-1 w-100">
                                    <h5>Getting back to school...Let's go</h5>
                                    <hr/>
                                </div>
                            </div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae consectetur eos
                            temporibus vitae? At blanditiis dolorum itaque
                            <br/>
                            <a href="#" className="mt-5 float-right">Read More</a>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-2">
                    <div className="card">
                        <div className="card-body p-0 ">
                            <img src={rasm3} alt="" width="100%" height="175px"/>
                        </div>
                        <div className={`card-footer ` + s.back}>
                            <div className="d-flex">
                                <div className={s.square1+` bg-info`}>
                                    <h6>10th</h6>
                                    <h6>OCT</h6>

                                </div>
                                <div className="pt-2 pl-1 w-100">
                                    <h6>Getting back to school</h6>

                                </div>
                            </div>

                            <a href="#" className="mt-2 float-right">Read More</a>

                        </div>
                    </div>
                    <div className="card mt-2">
                        <div className="card-body p-0 ">
                            <img src={rasm2} alt="" width="100%" height="175px"/>
                        </div>
                        <div className={`card-footer ` + s.back}>
                            <div className="d-flex">
                                <div className={s.square1+` bg-info`}>
                                    <h6>10th</h6>
                                    <h6>OCT</h6>

                                </div>
                                <div className="pt-2 pl-1 w-100">
                                    <h6>Getting back to school</h6>

                                </div>
                            </div>

                            <a href="#" className="mt-2 float-right">Read More</a>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-2">
                    <div className="card">
                        <div className="card-body p-0 ">
                            <img src={rasm4} alt="" width="100%" height="175px"/>
                        </div>
                        <div className={`card-footer ` + s.back}>
                            <div className="d-flex">
                                <div className={s.square1+` bg-info`}>
                                    <h6>10th</h6>
                                    <h6>OCT</h6>

                                </div>
                                <div className="pt-2 pl-1 w-100">
                                    <h6>Getting back to school</h6>

                                </div>
                            </div>

                            <a href="#" className="mt-2 float-right">Read More</a>

                        </div>
                    </div>
                    <div className="card mt-2">
                        <div className="card-body p-0 ">
                            <img src={rasm5} alt="" width="100%" height="175px"/>
                        </div>
                        <div className={`card-footer ` + s.back}>
                            <div className="d-flex">
                                <div className={s.square1+` bg-info`}>
                                    <h6>10th</h6>
                                    <h6>OCT</h6>

                                </div>
                                <div className="pt-2 pl-1 w-100">
                                    <h6>Getting back to school</h6>

                                </div>
                            </div>

                            <a href="#" className="mt-2 float-right">Read More</a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}
export default LatestNews