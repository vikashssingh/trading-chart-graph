import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { MdOutlineContactSupport } from "react-icons/md";
import { IoNotifications, IoSettings } from "react-icons/io5";

export const SidebarData = [
  {
    title: 'Home',
    path: '#',
    icon: <AiIcons.AiFillHome className="m-1" />,
    cName: 'nav-text'
  },

  {
    title: 'Organization',
    path: '#',
    icon: <IoIcons.IoIosPaper className="m-1" />,
    cName: 'nav-text'
  },
  {
    title: 'Assests',
    path: '#',
    icon: <FaIcons.FaCartPlus className="m-1" />,
    cName: 'nav-text'
  },
  {
    title: 'Wallet',
    path: '#',
    icon: <FaIcons.FaWallet className="m-1" />,
    cName: 'nav-text'
  },
  {
    title: 'History',
    path: '#',
    icon: <FaIcons.FaHistory className="m-1" />,
    cName: 'nav-text'
  },
  {
    title: 'Trade',
    path: '#',
    icon: <IoIcons.IoMdPeople className="m-1" />,
    cName: 'nav-text'
  },
  {
    title: 'Notifications',
    path: '#',
    icon: <IoNotifications className="m-1" />,
    cName: 'mb-auto'
  },
  {
    title: 'Support',
    path: '#',
    icon: <MdOutlineContactSupport className="m-1" />,
    cName: 'nav-text'
  },


  {
    title: 'Settings',
    path: '#',
    icon: <IoSettings className="m-1" />,
    cName: 'mb-auto'
  },




];