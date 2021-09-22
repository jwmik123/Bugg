import { useRouter } from 'next/dist/client/router';

import { 
    MenuIcon
 } from '@heroicons/react/outline';

function Header() {

    const router = useRouter();

    return (
        <header className='sticky top-0 z-50 grid grid-cols-2 pt-8 pb-5 px-10'>
            <div className='relative flex items-center h-8 cursor-pointer my-auto' onClick={() => router.push('/')}>
                <h1 className='text-4xl font-staat text-gray-800'>BUGG.</h1>
            </div>
            <div>
                <div className='flex justify-end lg:hidden'>
                    <MenuIcon className='w-10 h-10 cursor-pointer'/>
                </div>
                <div className='hidden lg:flex items-center space-x-4 justify-end text-gray-800'>
                    <p className='menu-item' onClick={() => router.push('/projects')}>Projecten</p>
                    <p className='menu-item' onClick={() => router.push('/about')}>Over ons</p>
                    <p className='menu-item' onClick={() => router.push('/contact')}>Contact</p>
                    <button className='bg-green-600 text-white rounded-lg px-4 py-2
                                        active:scale-95 transition transform ease-out'>Start een project</button>
                </div>
            </div>
        </header>
    )
}

export default Header
