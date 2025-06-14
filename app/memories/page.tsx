"use client";
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Memories() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            <div>
                {/* HEADER */}
                <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg11.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <div className="heading1 text-center">
                                    <h1>Recent Memories</h1>
                                    <div className="space20" />
                                    <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Recent Memories</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MEMORY SECTION */}
                <div className="memory-inner-section-area sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img4.png" alt="memory" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/event-single">Family Day</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img5.png" alt="memory" />
                                    </div>
                                    <div className="content-area">
                                        <p></p>
                                        <div className="space12" />
                                        <Link href="/event-single">Pre-Wedding Shoot</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img6.png" alt="memory" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/event-single">Robotica 2024</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img7.png" alt="memory" />
                                    </div>
                                    <div className="content-area">
                                       
                                        <div className="space12" />
                                        <Link href="/event-single">AVM Farewell Party</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img8.png" alt="memory" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/event-single">Pre-Wedding Shoot</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img9.png" alt="memory" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/event-single">Annual Day DAV</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img10.png" alt="memory" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/event-single">AVM Farewell Party</Link>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img1.png" alt="memory" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/event-single">Dakshin Chitra Event</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img11.png" alt="memory" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/event-single">College Culturals 2024</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA SECTION */}
                <div className="cta1-section-area">
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
    )
}