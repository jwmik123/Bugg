import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

import { 
    MenuIcon
 } from '@heroicons/react/outline';

function Header() {

    const router = useRouter();

    useEffect(() => {
        
    })

    // #042825

    return (
        <header className="sticky bg-transparent shadow-sm top-0 z-50 grid grid-cols-2 pt-5 pb-6 px-10 lg:px-20 transition transform ease-in duration-200">
            <div className='relative flex items-center h-8 cursor-pointer my-auto' onClick={() => router.push('/')}>
                <h1 className="text-5xl font-staat text-white my-auto">BUGG.</h1>
            </div>
            <div>
                <div className='flex justify-end my-auto lg:hidden'>
                    <MenuIcon className="w-10 h-10  cursor-pointer text-white "/>
                </div>
                <div className="hidden lg:flex items-center space-x-4 justify-end text-white">
                    <p className='menu-item' onClick={() => router.push('/projects')}>Projecten</p>
                    <p className='menu-item' onClick={() => router.push('/about')}>Over ons</p>
                    <p className='menu-item' onClick={() => router.push('/contact')}>Contact</p>
                    <button className='text-[#042825] bg-white rounded-lg px-4 py-2 active:scale-95 transition transform ease-out'>Start een project</button>
                </div>
            </div>
        </header>
    )
}

export default Header
