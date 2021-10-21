import React from 'react';
import s from './ProfileInfo.module.css';
import rasm from './../../../../Assists/Img/Без названия.jpg'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={rasm}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;