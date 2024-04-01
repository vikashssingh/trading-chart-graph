import React from 'react'

const MenuLink = ({ href, children, isActive, onClick }) => {


    return (
        <a
            className={`flex w-full  text-2xl max-sm:text-sm ${isActive ? 'text-green-600' : 'text-white'} mt-5`}
            href={href}
            onClick={onClick}
        >
            {children}
        </a>
    );
}

export default MenuLink