import { useRouter } from 'next/dist/client/router'

import animateScrollTo from 'animated-scroll-to'

import { MenuIcon } from '@heroicons/react/outline';

function Header() {

    const router = useRouter();

    // #042825

    return (
        <header className='flex justify-between text-white px-5 md:px-20 py-5 fixed z-50 w-full'>
            <div>
                <h1 className='font-staat text-4xl md:text-5xl leading-10'>BUGG.</h1>
            </div>
            <div className='flex items-center md:hidden'>
                <MenuIcon className='w-8 h-8' />
            </div>
            <div className='hidden md:flex items-center gap-20 text-base font-medium'>
                <button>Home</button>
                <button onClick={() => {animateScrollTo(document.querySelector('.services'))}}>Diensten</button>
                <button>Over Ons</button>
                <button>Contact</button>
            </div>
            <div className='hidden lg:block'>
                <button className='border-2 border-[#F1D302] text-[#F1D302] px-4 py-2 rounded'>Start een project</button>
            </div>
        </header>
    )
}

export default Header
