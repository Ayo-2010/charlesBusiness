// src/components/Carousel.jsx
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import first from '../assets/images/2.avif';
import second from '../assets/images/12.jpg';
import third from '../assets/images/32.jpg';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: first,
            title: "WE IMPROVE YOUR SALES EFFICIENCY",
            subtitle: "Explore the breathtaking peaks",
            topLayerText: "New Adventure",
            link: "www.facebook.com",
            col: 'text-gray-500',
            link2: "Contact Us"
        },
        {
            id: 2,
            image: second,
            title: "WE IMPROVE YOUR SALES EFFICIENCY",
            subtitle: "Relax on pristine sandy shores",
            topLayerText: "Summer Special",
            link: "www.youtube.com",
            col: 'text-gray-500',
            link2: "Contact Us"
        },
        {
            id: 3,
            image: third,
            title: "WE IMPROVE YOUR SALES EFFICIENCY",
            subtitle: "Immerse yourself in nature",
            topLayerText: "Eco Tour",
            link: "www.twitter.com",
            col: 'text-gray-500',
            link2: "Contact Us"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto slide (optional)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);
    

    return (
        <div className="relative w-full h-10/12 md:w-full">
            {/* Slides */}
            <div className="relative w-full h-full max-md:h-[400px]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute w-full inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute h-full z-10 w-full inset-0 bg-cover opacity-70 bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />

                        {/* Overlay for better text readability */}
                        <div className="absolute sm:mr-8 inset-0 w-full bg-gray-200 bg-opacity-40" />

                        {/* Top Layer with Light Gray Background */}
                        <div className="absolute top-0 left-0 right-0 bg-gray-300 bg-opacity-90 py-3 px-6">
                            <div className="container">
                                <span className="text-gray-800 font-semibold text-lg">
                                    {slide.topLayerText}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <div className="text-center max-w-4xl md:mb-40 mx-auto px-6">
                                <h1 className="text-5xl md:text-7xl font-bold max-sm:mt-30  animate-fade-in-up" style={{ color: `{green}`}}>
                                    {slide.title}
                                </h1>
                                <h3 className=" text-xl md:text-2xl mb-8 animate-fade-in-up text-gray-700  delay-300">
                                    {slide.subtitle}
                                </h3>
                                <button href={slide.link} className=" bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 animate-fade-in-up delay-200">
                                    {slide.link2}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="max-sm:hidden absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
            >
                <FaChevronLeft className="w-5 h-5 text-black" />
            </button>

            <button
                onClick={nextSlide}
                className="max-sm:hidden absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
            >
                <FaChevronRight className="w-5 h-5 text-black" />
            </button>

            {/* Indicators */}
            <div className="max-sm:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-gray-700 scale-125'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;