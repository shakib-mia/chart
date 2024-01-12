
import gear from "../../assets/gear.png";
import apple from "../../assets/apple.png"

const Details = () => {
    return (
        <div className="flex h-1/2 gap-5">
            <div className='w-1/2 bg-white shadow-xl rounded-[2rem] h-full p-5'>
                <div className="flex justify-between items-center">
                    <h6 className='text-lg font-semibold'>Income</h6>
                    <img src={gear} alt="gear" className='w-5 h-5' />
                </div>

                <div className="flex flex-col gap-4 my-8">
                    <div className="flex items-center gap-3">
                        <img src={apple} className='w-10' alt="apple" />
                        <h6 className='text-xl w-10/12'>Apple</h6>
                        <aside className='flex flex-col items-end'>
                            <h5 className='text-xl font-bold'>+$830</h5>
                            <small className='text-lime-800'>+1.1%</small>
                        </aside>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={apple} className='w-10' alt="apple" />
                        <h6 className='text-xl w-10/12'>Apple</h6>
                        <aside className='flex flex-col items-end'>
                            <h5 className='text-xl font-bold'>+$830</h5>
                            <small className='text-lime-800'>+1.1%</small>
                        </aside>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={apple} className='w-10' alt="apple" />
                        <h6 className='text-xl w-10/12'>Apple</h6>
                        <aside className='flex flex-col items-end'>
                            <h5 className='text-xl font-bold'>+$830</h5>
                            <small className='text-lime-800'>+1.1%</small>
                        </aside>
                    </div>
                </div>

                <div className="flex justify-between">
                    <h6>Summary</h6>
                    <button className='px-6 py-2 bg-blue-700 hover:bg-blue-900 transition rounded-full text-white font-medium'>$ 1,632</button>
                </div>
            </div>

            <div className='w-1/2 bg-white shadow-xl rounded-[2rem] h-full p-5'>
                <div className="flex justify-between items-center">
                    <h6 className='text-lg font-semibold'>Top 5 Assets</h6>
                    <img src={gear} alt="gear" className='w-5 h-5' />
                </div>

                <div className="flex flex-col gap-12 items-stretch mt-7 mb-1 relative">
                    <div className='h-px w-full bg-slate-300'></div>
                    <div className='h-px w-full bg-slate-300'></div>
                    <div className='h-px w-full bg-slate-300'></div>
                    <div className='h-px w-full bg-slate-300'></div>
                    <div className='h-px w-full bg-slate-300'></div>
                    <div className="absolute bottom-3 left-0 w-10 h-10 opacity-70 bg-green-800 rounded-full"></div>
                    <div className="absolute top-3 left-20 w-20 h-20 opacity-70 bg-blue-800 rounded-full"></div>
                    <div className="absolute top-0 left-56 w-40 h-40 opacity-70 bg-amber-700 rounded-full"></div>
                    <div className="absolute bottom-3 right-36 w-16 h-16 opacity-70 bg-blue-800 rounded-full"></div>
                    <div className="absolute top-3 right-0 w-20 h-20 opacity-70 bg-blue-900 rounded-full"></div>
                </div>


                <div className="flex justify-between">
                    <div className='text-lg font-medium'>1D</div>
                    <div className='text-lg font-medium'>1W</div>
                    <div className='text-lg font-medium'>1M</div>
                    <div className='text-lg font-medium'>1Y</div>
                </div>

            </div>
        </div>
    );
};

export default Details;