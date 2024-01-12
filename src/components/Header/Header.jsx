import Chart from '../Chart/Chart';
import Index from '../Index/Index';

const Header = () => {
    return (
        <div className='w-full bg-indigo-800 rounded-[2rem] py-10 pl-20 flex gap-10'>
            <Index />
            <Chart />
        </div>

    );
};

export default Header;