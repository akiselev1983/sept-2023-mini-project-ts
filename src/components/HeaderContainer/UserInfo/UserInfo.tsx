import React from 'react';
import css from './UserInfo.module.css'
import avatar from '../../../images/avatar.png'

const UserInfo = () => {
    return (
        <div className={css.block_user}>
            <img src={avatar} alt={avatar}/>
            <p>User</p>
        </div>
    );
};

export default UserInfo;