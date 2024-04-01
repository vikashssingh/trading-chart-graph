import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
const NavHead = ({handleclick}) => {
  return (
    <div className='logo flex justify-between'>
    <Image
        src="/logo2.png"
        alt="Vercel Logo"
        className="bg-transparent"
        width={100}
        height={50}
    />
    <GiHamburgerMenu  className='hburger text-white h-9 w-9 hidden' onClick={handleclick}/>
</div>
  )
}

export default NavHead