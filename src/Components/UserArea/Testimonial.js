import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';


const Testimonial = () => {

    // yourImg, duration, review, storeRating, yourName
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        const url = ('http://localhost:5000/shopReviews')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setreviews(data))
    }, [])

    // slider 
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className='max-w-6xl mx-auto grid col-span-3'>

            <p className="text-4xl font-bold text-gray-800 mb-4">
                Testimonial
            </p>
            {
                reviews.map(review => (
                    <Slider {...settings}>
                        <div className="w-full flex flex-col gap-4 mb-8 md:mb-0 flex-between items-center p-8">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow sm:inline-block">
                                <div className="flex items-start text-left">
                                    <div className="flex-shrink-0">
                                        <div className="inline-block relative">
                                            <a href="#" className="block relative">
                                                <img alt="profil" src={review.yourImg} className="mx-auto object-cover rounded-full h-16 w-16 " />
                                            </a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1">
                                                <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <p className="flex items-baseline">
                                            <span className="text-gray-600 dark:text-gray-200 font-bold">{review.yourName}
                                            </span>
                                            <span className="text-gray-500 dark:text-gray-300  ml-2 text-sm">
                                                {review.duration} months ago
                                            </span>
                                        </p>

                                        {/* rating */}
                                        <Rating
                                            initialRating={review.storeRating}
                                            readonly
                                            emptySymbol='far fa-star text-yellow-500'
                                            fullSymbol='fas fa-star text-yellow-500'
                                        />

                                        <div className="mt-3">
                                            <p className="mt-1 max-w-xs dark:text-white">{review.review}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                ))
            }

        </div>

    );

};

export default Testimonial;

