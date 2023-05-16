import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { ProductContext } from '../../../contexts/ProductContext';
import { CartContext } from '../../../contexts/CartContext';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const ProductDetails = () => {
    //get the product id from url
    const router = useRouter();
    const { id } = router.query;

    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    //get the target product from products using id
    const product = products?.find(item => item.id === parseInt(id));

    if (!product) {
        return <section className='h-screen flex justify-center items-center'>Loading...</section>
    }

    //destructure product
    const { title, price, description, image } = product;
    return (
        <div>
            <Header />
            <main>
                <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center ' >
                    <div className='container mx-auto'>
                        <div className='flex flex-col lg:flex-row items-center '>
                            {/* Image */}
                            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
                                <Image
                                    src={image}
                                    alt={title}
                                    width={200}
                                    height={200}
                                    className='max-w-[200px] lg:max-w-sm'
                                />
                            </div>

                            {/* Text */}
                            <div className='flex-1 text-center lg:text-left'>

                                <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'> {title} </h1>

                                <div className='text-xl text-red-500 font-medium mb-6'>
                                    $ {price}
                                </div>

                                <p className='mb-8'> {description} </p>

                                <button
                                    onClick={() => addToCart(product, product.id)}
                                    className='bg-primary py-4 px-8 text-white rounded'
                                >  Add to Cart</button>
                            </div>

                        </div>


                    </div>
                </section>
            </main>

            <Sidebar />
            <Footer />
        </div>

    );
};

export default ProductDetails;
