'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        575: { slidesPerView: 2, spaceBetween: 30 },
        767: { slidesPerView: 2, spaceBetween: 30 },
        991: { slidesPerView: 2, spaceBetween: 30 },
        1199: { slidesPerView: 3, spaceBetween: 30 },
        1350: { slidesPerView: 3, spaceBetween: 30 },
    }
}

export default function Section4() {
    return (
        <>
            <div className="team1-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="team-header space-margin60 heading2">
                                <h5 data-aos="fade-left" data-aos-duration={800}>Meet Our Expert Team</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">Crafting Unforgettable Events</h2>
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    Our team of professionals brings creativity, precision, and passion to every event. From planning to execution, we ensure your special moments are truly unforgettable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 position-relative">
                            <Swiper {...swiperOptions} className="team-slider-area">
                                <SwiperSlide className="team-widget-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/team/team-img1.png" alt="Event Planner" />
                                        <ul>
                                            <li><Link href="https://facebook.com"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link href="https://linkedin.com"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://instagram.com"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link href="https://youtube.com"><i className="fa-brands fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="space20" />
                                    <div className="text-area">
                                        <Link href="/team/Valli">Valli</Link>
                                        <div className="space16" />
                                        <p>Lead Event Planner</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="team-widget-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/team/team-img2.png" alt="Photographer" />
                                        <ul>
                                            <li><Link href="https://facebook.com"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link href="https://linkedin.com"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://instagram.com"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link href="https://youtube.com"><i className="fa-brands fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="space20" />
                                    <div className="text-area">
                                        <Link href="/team/Sudhrshan">Sudharshan</Link>
                                        <div className="space16" />
                                        <p>Head Photographer</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="team-widget-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/team/team-img3.png" alt="Decorator" />
                                        <ul>
                                            <li><Link href="https://facebook.com"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link href="https://linkedin.com"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://instagram.com"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link href="https://youtube.com"><i className="fa-brands fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="space20" />
                                    <div className="text-area">
                                        <Link href="/team/shreya">Shreya</Link>
                                        <div className="space16" />
                                        <p>Decor Specialist</p>
                                    </div>
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
