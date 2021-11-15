import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const NotFound = () => {
    return (
        <>

            <Header />

            <div className='max-w-6xl mx-auto my-10'>
                <h1 className='text-3xl text-indigo-700 font-bold text-center'>Page Not Found!!! Please Try Again. Thank You</h1>
            </div>

            <Footer />
        </>
    );
};

export default NotFound;