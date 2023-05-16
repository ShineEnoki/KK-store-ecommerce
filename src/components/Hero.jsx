import React from 'react';

//image
import WomanImg from '../../public/img/woman_hero.png';
import Link from 'next/link';
import Image from 'next/image';
const Hero = () => {
    return (
        <section 
            className=' h-[800px] background-hero  bg-no-repeat bg-cover bg-center '
        >
            <div className='container mx-auto flex justify-around h-full '>
                {/* text */}
                <div className='flex flex-col justify-center'>
                    {/* Pretitle */}
                    <div className='font-semibold flex items-center uppercase'>
                        <div className='w-10 h-[2px] bg-red-500 mr-3'>  </div> New Trend
                    </div>
                    <h1 className='text-[70px] leading-[1.1] font-light mb-4 '> Summer Sale STYLISH <br />
                        <span className='font-semibold' > WOMEN </span>
                    </h1>
                    <Link href={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'> Discover More </Link>
                </div>
                {/* image */}
                {/* <div className='hidden lg:block'> 
                    <Image src={WomanImg} alt="" />
                </div> */}
            </div>
        </section>
    )
};

export default Hero;
