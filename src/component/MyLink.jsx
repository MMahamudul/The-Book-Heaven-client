import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, children, className}) => {
    return (
        <div>
            <NavLink to={to} className={({isActive})=> isActive ? 'text-accent': `${className}`}>{children}</NavLink>
        </div>
    );
};

export default MyLink;