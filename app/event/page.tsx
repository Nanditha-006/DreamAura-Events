"use client";
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Event() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg8.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>Event List</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Event List</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== EVENT AREA STARTS =======*/}
                    <div className="event-team-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Upcoming & Past Events</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 m-auto">
                                    <div className="event-widget-area">
                                        <div className="row">
                                            <div className="col-lg-10 m-auto">
                                                <div className="event2-boxarea box1">
                                                    <h1 className="active">01</h1>
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-5">
                                                            <div className="img1">
                                                                <img src="/assets/img/all-images/event/event-img4.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-1" />
                                                        <div className="col-lg-6">
                                                            <div className="content-area">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="#"><img src="/assets/img/icons/clock1.svg" alt="" />6:00 PM - 11:00 PM <span> | </span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#"><img src="/assets/img/icons/location1.svg" alt="" />Chennai, India</Link>
                                                                    </li>
                                                                </ul>
                                                                <div className="space20" />
                                                                <Link href="/event-single" className="head">Grand Wedding Celebration</Link>
                                                                <div className="space24" />
                                                                <div className="author-area">
                                                                    <div className="autho-name-area">
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/testimonials/testimonial-img1.png" alt="" />
                                                                        </div>
                                                                        <div className="text">
                                                                            <Link href="/speakers-single">Priya Sharma</Link>
                                                                            <div className="space8" />
                                                                            <p>Lead Event Planner</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="autho-name-area" style={{ padding: '0 0 0 12px', border: 'none' }}>
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/testimonials/testimonial-img2.png" alt="" />
                                                                        </div>
                                                                        <div className="text">
                                                                            <Link href="/speakers-single">Rahul Verma</Link>
                                                                            <div className="space8" />
                                                                            <p>Decor Specialist</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="space24" />
                                                                <div className="btn-area1">
                                                                    <Link href="/pricing-plan" className="vl-btn1"><span className="demo">Book Now</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space48" />
                                        <div className="row">
                                            <div className="col-lg-10 m-auto">
                                                <div className="event2-boxarea box1">
                                                    <h1 className="active">02</h1>
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-6">
                                                            <div className="content-area">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="#"><img src="/assets/img/icons/clock1.svg" alt="" />5:00 PM - 10:00 PM <span> | </span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#"><img src="/assets/img/icons/location1.svg" alt="" />Bangalore, India</Link>
                                                                    </li>
                                                                </ul>
                                                                <div className="space20" />
                                                                <Link href="/event-single" className="head">Birthday Bash Extravaganza</Link>
                                                                <div className="space24" />
                                                                <div className="author-area">
                                                                    <div className="autho-name-area">
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/testimonials/testimonial-img1.png" alt="" />
                                                                        </div>
                                                                        <div className="text">
                                                                            <Link href="/speakers-single">Anjali Mehta</Link>
                                                                            <div className="space8" />
                                                                            <p>Event Coordinator</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="autho-name-area" style={{ padding: '0 0 0 12px', border: 'none' }}>
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/testimonials/testimonial-img2.png" alt="" />
                                                                        </div>
                                                                        <div className="text">
                                                                            <Link href="/speakers-single">Vikram Singh</Link>
                                                                            <div className="space8" />
                                                                            <p>Entertainment Lead</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="space24" />
                                                                <div className="btn-area1">
                                                                    <Link href="/pricing-plan" className="vl-btn1"><span className="demo">Book Now</span></Link>
                                                                </div>
                                                            </div>
                                                            <div className="space30 d-lg-none d-block" />
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <div className="img1">
                                                                <img src="/assets/img/all-images/event/event-img5.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space30" />
                                        <div className="row">
                                            <div className="col-lg-10 m-auto">
                                                <div className="event2-boxarea box1">
                                                    <h1 className="active">03</h1>
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-5">
                                                            <div className="img1">
                                                                <img src="/assets/img/all-images/event/event-img6.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-1" />
                                                        <div className="col-lg-6">
                                                            <div className="content-area">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="#"><img src="/assets/img/icons/clock1.svg" alt="" />7:00 PM - 12:00 AM <span> | </span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#"><img src="/assets/img/icons/location1.svg" alt="" />Mumbai, India</Link>
                                                                    </li>
                                                                </ul>
                                                                <div className="space20" />
                                                                <Link href="/event-single" className="head">Anniversary Gala Night</Link>
                                                                <div className="space24" />
                                                                <div className="author-area">
                                                                    <div className="autho-name-area">
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/testimonials/testimonial-img1.png" alt="" />
                                                                        </div>
                                                                        <div className="text">
                                                                            <Link href="/speakers-single">Suresh Kumar</Link>
                                                                            <div className="space8" />
                                                                            <p>Senior Event Manager</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="autho-name-area" style={{ padding: '0 0 0 12px', border: 'none' }}>
                                                                        <div className="img1">
                                                                            <img src="/assets/img/all-images/testimonials/testimonial-img2.png" alt="" />
                                                                        </div>
                                                                        <div className="text">
                                                                            <Link href="/speakers-single">Meera Joshi</Link>
                                                                            <div className="space8" />
                                                                            <p>Decor & Design</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="space24" />
                                                                <div className="btn-area1">
                                                                    <Link href="/pricing-plan" className="vl-btn1"><span className="demo">Book Now</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space60" />
                                    <div className="pagination-area">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" href="#" aria-label="Previous">
                                                        <i className="fa-solid fa-angle-left" />
                                                    </Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link active" href="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">...</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">12</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" href="#" aria-label="Next">
                                                        <i className="fa-solid fa-angle-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== EVENT AREA ENDS =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area d-lg-block d-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="cta1-main-boxarea">
                                        <div className="btn-area1">
                                            <Link href="/pricing-plan" className="vl-btn1">Book Now</Link>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link href="#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
                                            </li>
                                            <li className="m-0">
                                                <Link href="#"><img src="/assets/img/icons/location1.svg" alt="" />Chennai, India</Link>
                                            </li>
                                        </ul>
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
                                        <div className="btn-area1">
                                            <Link href="/pricing-plan" className="vl-btn1">Book Now</Link>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link href="#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
                                            </li>
                                            <li className="m-0">
                                                <Link href="#"><img src="/assets/img/icons/location1.svg" alt="" />Chennai, India</Link>
                                            </li>
                                        </ul>
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