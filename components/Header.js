import { useRouter } from 'next/dist/client/router'

import { useState, useEffect } from 'react'

import animateScrollTo from 'animated-scroll-to'

import { MenuIcon, XIcon } from '@heroicons/react/outline'

function Header() {

    const router = useRouter();

    const [toggle, setToggle] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 160) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    })

    // #042825

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <header className={colorChange ?'bg-gray flex justify-between text-white px-5 md:px-20 py-2 fixed z-50 w-full transition-all'
        : 'flex justify-between text-white px-5 md:px-20 py-5 fixed z-50 w-full'}>
            <div>
                <h1 className='font-staat text-4xl md:text-5xl leading-10'>BUGG.</h1>
            </div>
            <div className='flex items-center md:hidden'>
                {!toggle ? 
                    (<MenuIcon className='w-8 h-8 cursor-pointer' onClick={() => toggleMenu()} />) :
                    (<XIcon className='w-8 h-8 cursor-pointer' onClick={() => toggleMenu()} />)
                }
            </div>
            <div className='hidden md:flex items-center gap-20 text-base font-medium'>
                <button>Home</button>
                <button onClick={() => {animateScrollTo(document.querySelector('.services'))}}>Diensten</button>
                <button>Over Ons</button>
                <button>Contact</button>
            </div>
            <div className='hidden lg:block'>
                <button onClick={() => {animateScrollTo(document.querySelector('.contact'))}} className='border-2 border-yellow text-yellow px-4 py-2 rounded hover:bg-yellow hover:text-black transition-all active:scale-95'>Start een project</button>
            </div>
        </header>
    )
}

export default Header
