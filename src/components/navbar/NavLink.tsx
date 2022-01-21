import React from 'react';

import { Link } from 'react-router-dom';

interface NavLinkProps {
    linkName: string
    linkURL: string
}

export const NavLink = (props: NavLinkProps) => {
    return(
        <Link to={props.linkURL} className='block w-full h-10 lg:flex lg:w-28 lg:h-full items-center bg-white bg-opacity-0 hover:bg-opacity-40 transition ease-in-out motion-reduce:bg-inherit'><span className='flex-initial w-full text-lg'>{props.linkName}</span></Link>
    );
}