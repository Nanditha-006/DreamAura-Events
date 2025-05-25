'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        575: { slidesPerView: 2, spaceBetween: 30 },
        767: { slidesPerView: 2, spaceBetween: 30 },
        991: { slidesPerView: 3, spaceBetween: 30 },
        1199: { slidesPerView: 4, spaceBetween: 30 },
        1350: { slidesPerView: 4, spaceBetween: 30 },
    }
}
export default function Section7() {
    return (
        <>
            <div className="brands9-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 m-auto">
                            <div className="brand-header heading12 space-margin60 text-center">
                                <h5>Our Clients</h5>
                                <div className="space20" />
                                <h2>Trusted by Leading Clients & Brands</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 brand-slider-area9" data-aos="zoom-in" data-aos-duration={800}>
                            <Swiper {...swiperOptions} className="owl-carousel">
                                <SwiperSlide className="brand-box">
                                    <img src="/assets/img/elements/brand-img1.png" alt="Brand 1" />
                                </SwiperSlide>
                                <SwiperSlide className="brand-box">
                                    <img src="/assets/img/elements/brand-img2.png" alt="Brand 2" />
                                </SwiperSlide>
                                <SwiperSlide className="brand-box">
                                    <img src="/assets/img/elements/brand-img3.png" alt="Brand 3" />
                                </SwiperSlide>
                                <SwiperSlide className="brand-box">
                                    <img src="/assets/img/elements/brand-img4.png" alt="Brand 4" />
                                </SwiperSlide>
                                <SwiperSlide className="brand-box">
                                    <img src="/assets/img/elements/brand-img5.png" alt="Brand 5" />
                                </SwiperSlide>
                                <SwiperSlide className="brand-box">
                                    <img src="/assets/img/elements/brand-img6.png" alt="Brand 6" />
                                </SwiperSlide>
                                <SwiperSlide className="brand-box">
                                    <img src="/assets/img/elements/brand-img7.png" alt="Brand 7" />
                                </SwiperSlide>
                                <SwiperSlide className="brand-box">
                                    <img src="/assets/img/elements/brand-img8.png" alt="Brand 8" />
                                </SwiperSlide>
                            </Swiper>
                            <div className="owl-nav">
                                <button type="button" role="presentation" className="owl-prev h1p">
                                    <i className="fa-solid fa-angle-left" />
                                </button>
                                <button type="button" role="presentation" className="owl-next h1n">
                                    <i className="fa-solid fa-angle-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
