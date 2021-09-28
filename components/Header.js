import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

import { fadeIn } from 'react-animations';

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
        if (window.scrollY >= 50) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

   

    return (
        <header className={`sticky top-0 z-50 grid grid-cols-2 pt-5 pb-5 ${color ? 'pt-5' : 'lg:pt-20'} px-10 lg:px-20 ${color ? 'bg-white' : 'bg-transparent'} transition transform ease-in-out duration-200`}>
            <div className='relative flex items-center h-8 cursor-pointer my-auto' onClick={() => router.push('/')}>
                <h1 className={`text-5xl font-staat ${color ? 'text-[#042825]' : 'text-white'} my-auto`}>BUGG.</h1>
            </div>
            <div>
                <div className='flex justify-end lg:hidden'>
                    <MenuIcon className={`w-10 h-10  cursor-pointer text-white ${color ? 'text-[#042825]' : 'text-white'}`}/>
                </div>
                <div className={`hidden lg:flex items-center space-x-4 justify-end ${color ? 'text-[#042825]' : 'text-white'}`}>
                    <p className='menu-item' onClick={() => router.push('/projects')}>Projecten</p>
                    <p className='menu-item' onClick={() => router.push('/about')}>Over ons</p>
                    <p className='menu-item' onClick={() => router.push('/contact')}>Contact</p>
                    <button className={`${color ? 'text-white' : 'text-[#042825]'} ${color ? 'bg-[#042825]' : 'bg-white'} rounded-lg px-4 py-2
                                        active:scale-95 transition transform ease-out`}>Start een project</button>
                </div>
            </div>
        </header>
    )
}

export default Header
