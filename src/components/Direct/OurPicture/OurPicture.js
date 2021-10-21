import React from "react";
import s from './OurPicture.module.css'
import na2 from './../../../Assists/Img/nation2.jpg'
import na3 from './../../../Assists/Img/nation3.jpg'
import na4 from './../../../Assists/Img/nation4.jpg'
import na5 from './../../../Assists/Img/nation5.jpg'
import na6 from './../../../Assists/Img/nation6.jpg'
import na7 from './../../../Assists/Img/nation7.jpg'
import na8 from './../../../Assists/Img/nation8.jpg'


const OurPicture = () => {


    return (
        <div className={s.middle}>
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{color: "#114EA6",}}>Bizning Sur'atlar</h2>
                        <b>Bu rasmlar tadbirlardan va kunlik mashg'ulotlardan olindi</b>
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
                    <div className="col-md-3 ">
                        <div className="w-100">

                            <img src={na7} alt="" width="100%" height="297px"/>
                        </div>
                        <div className="w-100 mt-3">

                            <img src={na5} alt="" width="100%" height="200px"/>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="w-100">

                            <img src={na4} alt="" width="540px" height="300px"/>
                        </div>
                        <div className="w-100 mt-3 d-flex justify-content-between">
                            <div className=""><img src={na3} alt="" width="250px" height="200px"/></div>
                            <div className=""><img src={na6} alt="" width="250px" height="200px"/></div>

                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="w-100">

                            <img src={na8} alt="" width="100%" height="516px"/>
                        </div>

                    </div>
                </div>

            </div>
        </div>)
}
export default OurPicture