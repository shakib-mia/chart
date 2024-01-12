// import React from 'react';

const Index = () => {
    return (
        <div className='w-1/5'>
            <h4 className='text-amber-400 text-xl font-medium'>Portfolio Index</h4>
            <div className="flex text-white items-start font-medium">
                <h1 className='text-[10rem] leading-none'>18</h1><span className='mt-7 text-lg'>%</span>
            </div>

            <div className='mt-12 flex flex-col divide-y divide-indigo-200'>
                <div className='pb-5'>
                    <h6 className='text-indigo-400 font-semibold'>Apple</h6>
                    <div className="flex items-end gap-2">
                        <h4 className='text-indigo-200 text-4xl'>0.12</h4>
                        <aside className='flex items-center justify-between w-full  '>
                            <h4 className='text-lime-400 font-semibold'>(0.13%)</h4>
                            <div className='w-2 h-2 bg-lime-500 rounded-full'></div>
                        </aside>
                    </div>
                </div>
                <div className='pt-5'>
                    <h6 className='text-indigo-400 font-semibold'>Google</h6>
                    <div className="flex items-end gap-2">
                        <h4 className='text-indigo-200 text-4xl'>0.16</h4>
                        <aside className='flex items-center justify-between w-full  '>
                            <h4 className='text-orange-500 font-semibold'>(0.06%)</h4>
                            <div className='w-2 h-2 bg-orange-600 rounded-full'></div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;