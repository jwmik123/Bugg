import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

import { 
    MenuIcon
 } from '@heroicons/react/outline';

function Header() {

    const router = useRouter();
    const [color, setColor] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    })

    const onScroll = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

   

    return (
        <header className={`sticky top-0 z-50 grid grid-cols-2 pt-5 pb-5 px-10 ${color ? 'bg-blue-500' : 'bg-red-500'}`}>
            <div className='relative flex items-center h-8 cursor-pointer my-auto' onClick={() => router.push('/')}>
                <h1 className='text-4xl font-staat text-gray-800 my-auto'>BUGG.</h1>
            </div>
            <div>
                <div className='flex justify-end lg:hidden'>
                    <MenuIcon className='w-10 h-10 cursor-pointer'/>
                </div>
                <div className='hidden lg:flex items-center space-x-4 justify-end text-gray-800'>
                    <p className='menu-item' onClick={() => router.push('/projects')}>Projecten</p>
                    <p className='menu-item' onClick={() => router.push('/about')}>Over ons</p>
                    <p className='menu-item' onClick={() => router.push('/contact')}>Contact</p>
                    <button className='bg-[#1c542d] text-white rounded-lg px-4 py-2
                                        active:scale-95 transition transform ease-out'>Start een project</button>
                </div>
            </div>
        </header>
    )
}

export default Header
