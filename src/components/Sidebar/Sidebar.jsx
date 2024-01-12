// import React from 'react';
import logo from "../../assets/logo.svg";
import dashbord from "../../assets/dashboard.png";
import chat from "../../assets/chat.svg";
import pie from "../../assets/chart.svg";
import download from "../../assets/download.svg";
import gear from "../../assets/settings.svg";
import profilePicture from "../../assets/profile-pic.png"
// import dashbord from "../../assets/dashboard.png";

const Sidebar = () => {
    return (
        <div className='bg-white h-screen rounded-br-[4rem] p-10 flex flex-col justify-between sticky top-0'>
            <img src={logo} className='w-10 h-10 mx-auto cursor-pointer shadow-[0_0_10px_#ccc] rounded-xl' alt="" />
            <ul className='flex flex-col gap-6'>
                <li className='w-10 h-10 flex rounded justify-center cursor-pointer items-center shadow-[0_0_10px_#ccc]'>
                    <img src={dashbord} className='w-6 h-6 mx-auto cursor-pointer' alt="" />
                </li>
                <li className='w-10 h-10 flex rounded justify-center cursor-pointer items-center shadow-[0_0_10px_#ccc]'>
                    <img src={chat} className='w-6 h-6 mx-auto cursor-pointer' alt="" />
                </li>
                <li className='w-10 h-10 flex rounded justify-center cursor-pointer items-center shadow-[0_0_10px_#ccc]'>
                    <img src={pie} className='w-6 h-6 mx-auto cursor-pointer' alt="" />
                </li>
                <li className='w-10 h-10 flex rounded justify-center cursor-pointer items-center shadow-[0_0_10px_#ccc]'>
                    <img src={download} className='w-6 h-6 mx-auto cursor-pointer' alt="" />
                </li>
                <li className='w-10 h-10 flex rounded justify-center cursor-pointer items-center shadow-[0_0_10px_#ccc]'>
                    <img src={gear} className='w-6 h-6 mx-auto cursor-pointer' alt="" />
                </li>
            </ul>
            <img src={profilePicture} className="rounded-full" alt="" />
        </div>
    );
};

export default Sidebar;