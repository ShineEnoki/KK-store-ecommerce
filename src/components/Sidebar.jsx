import React, { useContext } from 'react';
import Link from 'next/link';

//import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

//components
import CartItem from '../components/CartItem';

//context 
import { SidebarContext } from '../../contexts/SidebarContext';
import { CartContext } from '../../contexts/CartContext';


const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, total, itemAmount } = useContext(CartContext);
    return (
        <div
            className={`${isOpen ? 'right-0' : '-right-full'}  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:w[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}
        >
            <div className='flex items-center justify-between py-6 border-b  ' >
                <div className=' uppercase text-sm font-semibold '> Shoppin Bag ({itemAmount} ) </div>

                {/* icons */}
                <div
                    onClick={handleClose}
                    className='cursor-pointer w-8 h-8 flex justify-center items-center '>
                    <IoMdArrowForward className='text-2xl' />
                </div>
            </div>

            {/* ITEMS IN THE CART */}
            <div className=' flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b ' >
                {
                    cart.map(item => 
                        <CartItem key={item.id} item={item} />
                    )
                }
            </div>

            <div className=' flex flex-col gap-y-3 py-4 mt-4 '>
                <div className='flex w-full justify-between items-center'>
                    {/* Total */}
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'> Total: </span> $ {total}
                    </div>

                    {/* Clear cart icon */}
                    <div
                        onClick={clearCart}
                        className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl  '
                    >
                        <FiTrash2 />
                    </div>
                </div>
                <Link 
                    href={'/'} 
                    className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'
                > View Cart </Link>
                <Link 
                    href={'/'} 
                    className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'
                > Check Out </Link>
            </div>
        </div>
    );
};

export default Sidebar;
