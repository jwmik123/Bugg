import { useRouter } from 'next/dist/client/router';

import { 
    MenuIcon
 } from '@heroicons/react/outline';

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
                <button>Projecten</button>
                <button>Over Ons</button>
                <button>Contact</button>
            </div>
            <div className='hidden lg:block'>
                <button className='border-2 border-[#F5D905] text-[#F5D905] px-4 py-2 rounded'>Start een project</button>
            </div>
        </header>
        // <header className="sticky bg-transparent shadow-sm top-0 z-50 grid grid-cols-2 pt-5 pb-6 px-10 lg:px-20 transition transform ease-in duration-200">
        //     <div className='relative flex items-center h-8 cursor-pointer my-auto' onClick={() => router.push('/')}>
        //         <h1 className="text-5xl font-staat text-white my-auto">BUGG.</h1>
        //     </div>
        //     <div className='flex justify-between'>
        //         <div className='flex justify-end my-auto lg:hidden'>
        //             <MenuIcon className="w-10 h-10  cursor-pointer text-white "/>
        //         </div>
        //         <div className="flex justify-between">
        //             <p className='menu-item' onClick={() => router.push('/projects')}>Projecten</p>
        //             <p className='menu-item' onClick={() => router.push('/about')}>Over ons</p>
        //             <p className='menu-item' onClick={() => router.push('/contact')}>Contact</p>
        //         </div>
        //         <div>
        //             <button className='text-[#042825] bg-white rounded-lg px-4 py-2 active:scale-95 transition transform ease-out'>Start een project</button>   
        //         </div>
        //     </div>
        // </header>
    )
}

export default Header
