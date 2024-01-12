// import React from 'react';
import profile from "../../assets/profile-pic.png"

const DetailsBar = () => {
    return (
        <div className='w-1/5 h-screen bg-white sticky top-0 right-0 p-10'>
            <div className="flex items-center gap-4">
                <img src={profile} alt="" />
                <h4 className="text-2xl font-semibold">Annie H</h4>
            </div>

            <div className="flex justify-between items-center my-8">
                <h5 className="text-xl font-semibold">Watchlist</h5>
                <button className="underline hover:no-underline">See All</button>
            </div>

            <div className="p-3 shadow-[0_0_6px_#aaa] rounded-lg flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <aside>
                        <h6 className="text-lg font-semibold">AAPL</h6>
                        <p className="text-xs">APPLE INC</p>
                    </aside>

                    <aside className="text-green-700 font-semibold">+2.48%</aside>
                </div>
                <div className="flex justify-between items-center">
                    <aside>
                        <h6 className="text-lg font-semibold">FB</h6>
                        <p className="text-xs">FACEBOOK INC</p>
                    </aside>

                    <aside className="text-red-700 font-semibold">+2.48%</aside>
                </div>

                <div className="flex justify-between items-center">
                    <aside>
                        <h6 className="text-lg font-semibold">TWLO</h6>
                        <p className="text-xs">TWILIO INC</p>
                    </aside>

                    <aside className="text-green-700 font-semibold">+2.48%</aside>
                </div>

                <div className="flex justify-between items-center">
                    <aside>
                        <h6 className="text-lg font-semibold">AAPL</h6>
                        <p className="text-xs">APPLE INC</p>
                    </aside>

                    <aside className="text-green-700 font-semibold">+2.48%</aside>
                </div>
            </div>

            <div className="flex justify-between items-center my-8">
                <h5 className="text-xl font-semibold">Notifications</h5>
                <button className="underline hover:no-underline">See All</button>
            </div>

            <div className="flex flex-col mt-5 gap-10">
                <div className="flex gap-3 items-start">
                    <div className="bg-red-600 w-2 h-2 rounded-full mt-1"></div>
                    <aside className="w-11/12">
                        <h6 className="text-base font-bold">FYI: Earnings Notifications</h6>
                        <p className="mt-3 text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas praesentium, soluta itaque consequuntur quaerat autem id alias quo, officia aperiam quos, magni eos laboriosam esse reiciendis sed distinctio nulla quas.
                        </p>
                    </aside>
                </div>

                <div className="flex gap-3 items-start">
                    <div className="bg-red-600 w-2 h-2 rounded-full mt-1"></div>
                    <aside className="w-11/12">
                        <h6 className="text-base font-bold">FYI: Earnings Notifications</h6>
                        <p className="mt-3 text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas praesentium, soluta itaque consequuntur quaerat autem id alias quo, officia aperiam quos, magni eos laboriosam esse reiciendis sed distinctio nulla quas.
                        </p>
                    </aside>
                </div>
            </div>

        </div>

    );
};

export default DetailsBar;