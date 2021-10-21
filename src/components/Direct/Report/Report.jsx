import React from "react";
import s from './Report.module.css'
import img1 from '../../../Assists/Img/img1.jpg'
import img2 from '../../../Assists/Img/img2.jpg'
import img3 from '../../../Assists/Img/img3.jpg'

const Report = (props) => {
    return (<div className={s.report}>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 ">
                    <h2 style={{color: "#114EA6",}}>Ijodiy Loyihalar</h2>
                    <b>Ishni nimadan boshlasa foydaliroq</b>
                    <br/>
                    <br/>
                    <div className={s.borderMain}>

                    </div>
                    <p className="mb-2"></p>
                    <div className={s.borderMain1}>

                    </div>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias aliquid aperiam
                        aspernatur atque consectetur consequatur delectus dignissimos dolor ducimus earum eum ex
                        expedita, explicabo fugiat iste iusto laborum libero magnam maiores minus natus neque nihil
                        obcaecati optio praesentium quae quaerat quam
                    </p>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias aliquid aperiam
                        aspernatur atque consectetur consequatur delectus dignissimos dolor ducimus earum eum ex

                    </p>


                </div>
                <div className="col-md-3">
                    <div className="text-right">
                        <img src={img1} alt="" style={{height:"140px",width:"180px"}}/>
                        <img src={img2} alt="" style={{height:"190px",width:"250px"}} className="mt-2"/>

                    </div>
                </div>
                <div className="col-md-3">
                    <img src={img3} alt="" style={{height:"300px",width:"250px"}} className="mt-3"/>
                </div>
            </div>
        </div>
    </div>)
}
export default Report