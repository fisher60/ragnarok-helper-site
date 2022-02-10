import { useState } from 'react';
import { NavLink } from './NavLink';

import hamburgerIcon from './hamburger.png';
import './Navbar.css';

const navLinkNames = [
    {linkName: 'Home', linkURL: '/'},
    // {linkName: 'Map', linkURL: 'map'}
];

export function Navbar() {
    const [navbarActive, navbarSwitch] = useState(false);
    return (
        <nav className='block wt-full text-white bg-blue-500'>
            <h1 className="absolute left-0 lg:hidden font-medium mt-2 ml-4 mr-4 text-2xl">Sleepy Kitty Guild</h1>
            <div className='flex justify-end w-full'>
                <img onClick={() => navbarSwitch(!navbarActive)} src={hamburgerIcon} className='m-3 h-8 p-1 lg:hidden border-white border-2 rounded-md' />
            </div>

            {/* Large screen navbar */}
            <div className='hidden lg:block w-full'>
                <div className='flex flex-wrap items-center w-full mx-auto h-auto text-center lg:h-12'>
                    <h1 className="hidden lg:flex font-medium ml-8 mr-4 text-2xl">Sleepy Kitty Guild</h1>
                    {navLinkNames.map((i, e) => <NavLink key={e} linkName={i.linkName} linkURL={i.linkURL}/>)}
                </div>
            </div>
            
            {/* Mobile navbar */}
            <div className={navbarActive ? 'navExpanded' : 'navCollapsed' + ' w-full'}>
                <div className='flex flex-wrap items-center w-full mx-auto h-auto text-center lg:h-12'>
                    <h1 className="hidden lg:flex font-medium ml-8 mr-4 text-2xl">Sleepy Kitty Guild</h1>
                    {navLinkNames.map((i, e) => <NavLink key={e} linkName={i.linkName} linkURL={i.linkURL}/>)}
                </div>
            </div>

        </nav>
    );
}
