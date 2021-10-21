import React from "react";
import s from './Header.module.css'
import callIcon from '../../../Assists/Img/zz.png'


const curry = f => (...args) =>
    args.length >= f.length ?
        f(...args) :
        curry(f.bind(f, ...args));

const compose = (f, g) => x => f(g(x));
const composeN = (...fns) => (...args) =>
    fns.reverse().
    reduce((x, f) => f.apply(f, [].concat(x)), args);

const Header = () => {
    return (
        <div className={s.header + ` conatiner-fluid`}>
            <div className="row">
                <div className="col-md-12">
                    <div className={s.InHeader + ` container`}>
                        <img src={callIcon} alt="" className={s.imgSize + ` mr-2`}/>
                        <span>+998 94 654 66 06</span>
                        <a href="https://goo.gl/maps/h9TwDSJ2MpUhLHys6" target="_blank" className="px-2">
                <span>

<svg xmlns="http://www.w3.org/2000/svg" className="rubicons map-pin-location" width="22" height="22" viewBox="0 0 24 24"
     stroke="currentColor" stroke-width="1.5" fill="none">
  <path d="M12 13c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3z" stroke-linecap="round"></path>
  <path d="M19 10c0 6-7 11-7 11s-7-5-7-11c0-3.866 3.134-7 7-7s7 3.134 7 7z"></path>
</svg>
           </span>
                            <span>Beruniy Metro</span>
                        </a>
                        <span className="float-right">
                <svg xmlns="http://www.w3.org/2000/svg" className="rubicons magnify"
                     width="22" height="22" viewBox="0 0 24 24" stroke="currentColor"
                     stroke-width="1.5" fill="none">
  <path d="M10.5 18c4.1421 0 7.5-3.3579 7.5-7.5S14.6421 3 10.5 3 3 6.3579 3 10.5 6.3579 18 10.5 18z"></path>
  <path d="M21 21l-5-5M6.2561 12C6.8206 13.597 8.261 14.7803 10 14.9725" stroke-linecap="round"
        stroke-linejoin="round"></path>
                </svg>
            </span>

                    </div>
                </div>
            </div>
            {/*<div className="row">*/}
            {/*    <div className="col-md-12">*/}
            {/*        <div className={s.stage}>*/}
            {/*            <div className={s.wrapper}>*/}
            {/*                <div className={s.slash}></div>*/}
            {/*                <div className={s.sides}>*/}
            {/*                    <div className={s.side}></div>*/}
            {/*                    <div className={s.side}></div>*/}
            {/*                    <div className={s.side}></div>*/}
            {/*                    <div className={s.side}></div>*/}
            {/*                </div>*/}
            {/*                <div className={s.text}>*/}
            {/*                    <div className={s.text__backing}>Amailiy_matematika_Va_intelektual_texnologiyalar</div>*/}
            {/*                    <div className={s.text__left}>*/}
            {/*                        <div className={s.inner}>Amailiy_matematika_Va_intelektual_texnologiyalar</div>*/}
            {/*                    </div>*/}
            {/*                    <div className={s.text__right}>*/}
            {/*                        <div className={s.inner}>Amailiy_matematika_Va_intelektual_texnologiyalar</div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}



    </div>
    )
}
export default Header