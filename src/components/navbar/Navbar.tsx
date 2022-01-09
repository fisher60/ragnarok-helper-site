import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className='block bg-teal-500 wt-full'>
            <div className='flex wt-full justify-between'>
                <div className='ml-4 h-8'>Sleepy Kitty Guild</div>
                <div className='mr-4 h-8'>Button</div>
            </div>

            <div className='flex flex-wrap'>
                {[...Array(4)].map((e, i) => <a key={i} className='flex-initial w-full h-8 lg:w-20' href='#nothing'>About</a>)}
                
            </div>
        </nav>
    );
}