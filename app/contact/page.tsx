"use client";
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg12.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>Contact Us</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Contact Us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== CONTACT AREA STARTS =======*/}
                    <div className="contact-inner-section sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/contact/contact-img4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1000}>
                                    <div className="contact4-boxarea">
                                        <h3 className="text-anime-style-3">Get In Touch Now</h3>
                                        <div className="space8" />
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-area">
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-area">
                                                    <input type="text" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="input-area">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="input-area">
                                                    <input type="text" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-area">
                                                    <textarea placeholder="Message" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="space24" />
                                                <div className="input-area text-end">
                                                    <button type="submit" className="vl-btn1">Submit Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== CONTACT AREA ENDS =======*/}
                    {/*===== CONTACT INFO AREA STARTS =======*/}
                    <div className="contact2-bg-section">
                        <div className="img1">
                            <img src="/assets/img/all-images/contact/contact-img1.png" alt="" className="contact-img1" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="space48" />
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={900}>
                                                <div className="icons">
                                                    <img src="/assets/img/icons/mail1.svg" alt="" />
                                                </div>
                                                <div className="text">
                                                    <h5>Our Email</h5>
                                                    <div className="space14" />
                                                    <Link href="mailto:Dreamauraevent@gmail.com">Dreamauraevent@gmail.com</Link>
                                                </div>
                                            </div>
                                            <div className="space18" />
                                            <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                                                <div className="icons">
                                                    <img src="/assets/img/icons/location1.svg" alt="" />
                                                </div>
                                                <div className="text">
                                                    <h5>Our Location</h5>
                                                    <div className="space14" />
                                                    <Link href="#">Chennai, India</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="space30 d-md-none d-block" />
                                            <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                                                <div className="icons">
                                                    <img src="/assets/img/icons/phn1.svg" alt="" />
                                                </div>
                                                <div className="text">
                                                    <h5>Call/Message</h5>
                                                    <div className="space14" />
                                                    <Link href="tel:+917550277296">+91 75502 77296</Link>
                                                </div>
                                            </div>
                                            <div className="space18" />
                                            <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1200}>
                                                <div className="icons">
                                                    <img src="/assets/img/icons/instagram.svg" alt="" />
                                                </div>
                                                <div className="text">
                                                    <h5>Instagram</h5>
                                                    <div className="space14" />
                                                    <Link href="https://instagram.com/dreamaura.events" target="_blank">dreamaura.events</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.979751845173!2d80.22097707504944!3d13.06042288726337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d1b8e8e8e9%3A0x7f8e8e8e8e8e8e8e!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1704088968016!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </div>
                    <div className="space100 d-lg-block d-none" />
                    <div className="space50 d-lg-none d-block" />
                    {/*===== CONTACT INFO AREA ENDS =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area d-lg-block d-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="cta1-main-boxarea">
                                        <div className="timer-btn-area">
                                            {/* <Countdown /> */}
                                            <div className="btn-area1">
                                                <Link href="/pricing-plan" className="vl-btn1">Book Now</Link>
                                            </div>
                                        </div>
                                        {/* Removed calendar and location list */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== CTA AREA ENDS =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area d-lg-none d-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="cta1-main-boxarea">
                                        <div className="timer-btn-area">
                                            {/* <Countdown /> */}
                                            <div className="btn-area1">
                                                <Link href="/pricing-plan" className="vl-btn1">Book Now</Link>
                                            </div>
                                        </div>
                                        {/* Removed calendar and location list */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}