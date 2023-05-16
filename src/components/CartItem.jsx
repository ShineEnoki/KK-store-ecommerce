import React, { useContext } from 'react';
import Link from 'next/link';

//icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../../contexts/CartContext';
import Image from 'next/image';

const CartItem = ({ item }) => {
    const { id, title, image, price, amount } = item;

    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ' >
            <div className='w-full min-h-[150px] flex items-center gap-x-4  ' >
                {/* Image */}
                <Link href={`/product/${id}`} >
                    <Image 
                        className='max-w-[80px] ' 
                        src={image} 
                        width={100}
                        height={100}
                        alt="" />
                </Link>

                <div className='w-full flex  flex-col '>

                    {/* title and remove icon */}
                    <div className='flex justify-between mb-2 '>

                        {/* title */}
                        <Link href={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline ' > {title} </Link>

                        {/* remove icon */}
                        <div 
                            onClick={() => removeFromCart(id)}
                            className='text-xl cursor-pointer'>
                            <IoMdClose className='text-gray-500 hover:text-red-500 transition  ' />
                        </div>
                    </div>

                    <div className=' flex gap-x-2 h-[36] text-sm '>
                        {/* qty */}
                        <div className='flex flex-1 gap-1 max-w-[100px]  items-center h-full border text-primary font-medium  py-2'>
                            {/* minus icon */}
                            <div
                                onClick={() => decreaseAmount(id)} 
                                className='flex-1  h-full flex justify-center items-center cursor-pointer '>
                                <IoMdRemove />
                            </div>
                      

                            {/* amount */}
                            <div className='h-full justify-center items-center px-2 '> {amount} </div>

                            {/* plus icon */}
                            <div 
                                onClick={() => increaseAmount(id)}
                                className='flex-1 h-full flex justify-center items-center cursor-pointer'
                            >
                                <IoMdAdd />
                            </div>
                        </div>
                        {/* item price */}
                        <div  className='flex-1 flex items-center justify-around'> $ {price} </div>
                        {/* final Price */}
                        <div className='flex-1 flex justify-end items-center text-primary font-medium ' > {`$ ${parseFloat(price * amount).toFixed(2)}`} </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
