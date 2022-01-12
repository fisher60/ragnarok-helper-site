import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className='block wt-full'>
            <div className='flex wt-full justify-between h-24 items-center'>
                <div className='ml-4 h-8'>Sleepy Kitty Guild</div>
                <div className='mr-4 h-8'>Button</div>
            </div>

            <div className='flex flex-wrap h-auto lg:h-12 bg-teal-500'>
                {[...Array(4)].map((e, i) => <Link key={i} to="about" className='block w-full h-10 lg:flex lg:border-2 lg:border-black lg:w-28 lg:h-full items-center bg-white bg-opacity-0 hover:bg-opacity-40 transition ease-in-out motion-reduce:bg-inherit'><span className='flex-initial w-full text-lg'>About</span></Link>)}
                
            </div>
        </nav>
    );
}