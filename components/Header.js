import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

import { 
    MenuIcon
 } from '@heroicons/react/outline';

function Header() {

    const router = useRouter();

    useEffect(() => {
        
    })

    return (
        <header className="sticky top-0 z-50 grid grid-cols-2 pt-5 pb-5 px-10 lg:px-20 lg:mt-10 transition transform ease-in duration-200">
            <div className='relative flex items-center h-8 cursor-pointer my-auto' onClick={() => router.push('/')}>
                <h1 className="text-5xl font-staat text-[#042825] my-auto">BUGG.</h1>
            </div>
            <div>
                <div className='flex justify-end my-auto lg:hidden'>
                    <MenuIcon className="w-10 h-10  cursor-pointer text-[#042825] "/>
                </div>
                <div className="hidden lg:flex items-center space-x-4 justify-end text-[#042825]">
                    <p className='menu-item' onClick={() => router.push('/projects')}>Projecten</p>
                    <p className='menu-item' onClick={() => router.push('/about')}>Over ons</p>
                    <p className='menu-item' onClick={() => router.push('/contact')}>Contact</p>
                    <button className="text-white bg-[#042825] rounded-lg px-4 py-2 active:scale-95 transition transform ease-out">Start een project</button>
                </div>
            </div>
        </header>
    )
}

export default Header
