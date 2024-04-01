"use client"
import React, { useState } from 'react';
import MenuLink from './MenuLink';
import { SidebarData } from './SidebarData';
import { FaSearch } from 'react-icons/fa';
import { FaRegUserCircle } from "react-icons/fa";
import Image from 'next/image';

const SidebarNav = ({ prop }) => {
    const [activeLink, setActiveLink] = useState(null);
    const [searchText, setsearchText] = useState('');


    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <>
            <nav className={`${!prop ? 'main-nav' : 'mobile'} flex flex-col bg-gray-800 w-1/4 p-8 border-r-slate-950 rounded-r-lg h-screen`} >
                <Image
                    src="/logo2.png"
                    alt="Vercel Logo"
                    className="bg-transparent"
                    width={100}
                    height={50}
                />
                <div className='menu mt-10 relative'>
                    <FaSearch className="text-white absolute top-3 right-5 " />
                    <input
                        value={searchText}
                        type="text"
                        placeholder="Search"
                        className='bg-gray-700 p-2 rounded text-white w-full'
                        onChange={(e) => { setsearchText(e.target.value) }}
                    />
                    <ul className='menu mt-5 flex flex-col'>
                        {SidebarData.map((link, index) => (
                            <li key={index} className={`${link.cName}`}>
                                <MenuLink
                                    href={link.path}
                                    isActive={activeLink === index}
                                    onClick={() => handleLinkClick(index)}
                                >
                                    {link.icon}
                                    {link.title}
                                </MenuLink>
                            </li>))}
                    </ul>
                </div>
                <div className='p-5 max-sm:p-1 bg-gray-700 rounded-2xl text-white w-full flex mt-auto'>
                    <FaRegUserCircle className='h-10 w-10 max-sm:hidden' />
                    <div className='flex flex-col px-7 max-sm:text-sm'>
                        vikash kumar
                        <span className='text-gray-500 max-sm:text-xs'>vikashsinghs5530@gmail.com</span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default SidebarNav