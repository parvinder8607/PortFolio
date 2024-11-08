import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import img from './Rectangle.png'

const DoubleCard = () => {
  return (
    <div className=' shadow-custom-shadow w-1/4 flex h-auto bg-slate-900 rounded-3xl'>
        <div className="image m-8">
            <img className=' ' src={img} alt="" />
        </div>
        <div className=" px-6 py-10 text-left w-2/3 info rounded-[30px] bg-black text-white">
            <h1 className=' font-bold text-[32px]'>Heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, obcaecati? Magnam sit dolorum animi error.</p>
            <button className='text-black font-bold rounded-full px-4 py-2 bg-white mt-2 flex  items-center gap-2 hover:bg-slate-600 hover:text-slate-100 transition-all'><FaArrowLeft />Read More</button>
        </div>

    </div>
  )
};

export default DoubleCard;
