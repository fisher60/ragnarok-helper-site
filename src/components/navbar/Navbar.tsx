import { NavLink } from './NavLink';

import './Navbar.css';

const navLinkNames = [
    {linkName: 'Home', linkURL: 'home'},
    {linkName: 'Map', linkURL: 'map'}
];

export const Navbar = () => {
    return (
        <nav className='block wt-full text-white bg-blue-900'>
            <div className='flex wt-full justify-between h-24 items-center'>
                <div className='ml-4 lg:ml-24 h-8 text-xl lg:text-3xl'>Sleepy Kitty Guild</div>
                <div className='mr-6 h-8'>Button</div>
            </div>

            <div className='block w-full content-center text-white bg-blue-500'>
                <div className='flex flex-wrap w-full lg:w-5/6 mx-auto h-auto text-center lg:h-12'>
                    {navLinkNames.map((i, e) => <NavLink key={e} linkName={i.linkName} linkURL={i.linkURL}/>)}
                </div>
            </div>
        </nav>
    );
}
