"use client";
import { useState } from "react";

import SidebarNav from "./components/SidebarNav";
import Main from "./components/Main";
import NavHead from './components/NavHead';

export default function Home() {
  const [navbar,setNav] = useState(false);
  return (
    <>
    <div className="App bg-black flex h-full">
    <div className='navHead hidden p-5'><NavHead handleclick={()=>setNav(!navbar)}/></div>
    <SidebarNav prop={navbar}/>
    <Main />
    </div>

    </>
  );
}
