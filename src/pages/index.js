import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';

//import components
import Product from '../components/Product';
import Hero from '../components/Hero'
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const Home = () => {
    const { products } = useContext(ProductContext);

    // getony mean and women clothing category
    const filterProducts = products?.filter(item => item.category === "men's clothing" || item.category === "women's clothing")


    return (
        <div>
            <Header />
            <main >
                <Hero />

                <section className="py-16">
                    <div className="container mx-auto">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] '>
                            {products?.map(product => {
                                return (

                                    <Product key={product.id} product={product} />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Sidebar />
            <Footer />

        </div>
    );
};

export default Home;
