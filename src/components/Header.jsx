import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';

//icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai'
import { CartContext } from '../../contexts/CartContext';

import Link from 'next/link';

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60
                ? setIsActive(true)
                : setIsActive(false)
        })
    })
    return (
        <header className={`${isActive ? 'bg-white py-4 shadow-md ' : 'bg-none py-6'} fixed w-full z-10 transition-all duration-700 `}>
            <div className=' container mx-auto flex items-center justify-between h-full '>

                {/* Logo link */}
                <Link href={'/'} >
                    <div>
                        <p> KK Store </p>
                    </div>
                </Link>

                <div className='flex flex-row gap-4'>
                    {/* Links */}
                    <div className='text-2xl'>
                        <Link href={'/'}>
                            <AiOutlineHome />
                        </Link>
                    </div>
                    {/* Cart */}
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className='cursor-pointer flex relative '
                    >
                        <AiOutlineShoppingCart className='text-2xl' />
                        <div 
                            className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '
                        > {itemAmount} </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
