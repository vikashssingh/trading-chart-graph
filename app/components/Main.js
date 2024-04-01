import React from 'react'
import { GiHand } from "react-icons/gi";
import Cryptocards from './Cryptocards';
import GraphCard from './GraphCard';
import Wallet from './Wallet';
import Post from './Post';


const Main = () => {
    return (
        <div className='Main p-20 w-3/4 text-white'>

            <div className='head flex justify-between'>
                <div>
                    <div className=' text-white text-4xl max-sm:text-xl flex'>Hello, <span className='head text-lime-500'>
                        vikash singh</span> <GiHand className='text-yellow-400 m-1' /></div>
                    <div className=' text-white text-2xl max-sm:text-lg flex'>Welcome to, <span className='head text-lime-700'>
                        Spot trading!</span></div>
                </div>
                <div>
                    <button className='p-3 max-sm:p-2 bg-lime-600 text-white rounded'>Start Trading</button>
                </div>
            </div>
            <div className='mainContent flex flex-col'>
                <div className='main1 flex'>
                    <GraphCard />
                    <Wallet />
                    <Post />

                </div>
                <span className='my-5 text-lg' >Assets</span>
                <Cryptocards />

            </div>

        </div>
    )
}

export default Main