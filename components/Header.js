import { useRouter } from 'next/dist/client/router';

import Image from 'next/image';
import { 
    PhoneIcon,
    MailIcon
 } from '@heroicons/react/outline';

function Header() {

    const router = useRouter();

    return (
        <header className='sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-3 md:px-10'>
            <div className='relative flex items-center h-8 cursor-pointer my-auto'>
                <h2 className='text-xl font-bold text-gray-800'>BUGG.</h2>
            </div>
            <div>
                <div className='flex items-center space-x-4 justify-end text-gray-800'>
                    <p className='menu-item' onClick={() => router.push('/projects')}>Projecten</p>
                    <p className='menu-item' onClick={() => router.push('/about')}>Over Ons</p>
                    <p className='menu-item' onClick={() => router.push('/contact')}>Contact</p>
                    <div>
                        <MailIcon />
                        <PhoneIcon />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
