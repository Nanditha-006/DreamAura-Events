import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function EventSchedule() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg10.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>Event Schedule</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Event Schedule</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== SCHEDULE HIGHLIGHTS START =======*/}
                    <div className="choose-section-area sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Event Highlights</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="choose-widget-boxarea">
                                        <div className="icons">
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="/event-single">Magical Wedding Ceremony</Link>
                                            <div className="space16" />
                                            <p>Experience a blend of tradition and modern elegance with Dream Aura Events’ signature wedding celebrations.</p>
                                            <div className="space24" />
                                            <Link href="/event-single" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="choose-widget-boxarea">
                                        <div className="icons">
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="/event-single">Grand Birthday Bash</Link>
                                            <div className="space16" />
                                            <p>Celebrate birthdays with creative themes, fun activities, and unforgettable memories for all ages.</p>
                                            <div className="space24" />
                                            <Link href="/event-single" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="choose-widget-boxarea">
                                        <div className="icons">
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="/event-single">Anniversary Gala Night</Link>
                                            <div className="space16" />
                                            <p>Mark your milestones with style—luxury decor, gourmet cuisine, and live entertainment await.</p>
                                            <div className="space24" />
                                            <Link href="/event-single" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== SCHEDULE HIGHLIGHTS END =======*/}
                    {/*===== EVENT SCHEDULE TABLE START =======*/}
                    <div className="schedule-section-area sp10">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-11 m-auto">
                                    <div className="schedule">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Friday</th>
                                                    <th>Saturday</th>
                                                    <th>Sunday</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>09:00-10:00 AM</td>
                                                    <td>Welcome Breakfast<br /><span>By Dream Aura Team</span></td>
                                                    <td>Floral Decor Workshop<br /><span>By Decor Specialist</span></td>
                                                    <td>Kids’ Carnival<br /><span>By Entertainment Team</span></td>
                                                </tr>
                                                <tr>
                                                    <td>10:00-11:00 AM</td>
                                                    <td>Wedding Planning Tips<br /><span>By Priya Sharma</span></td>
                                                    <td>Birthday Bash Setup<br /><span>By Rahul Verma</span></td>
                                                    <td>Anniversary Memories<br /><span>By Suresh Kumar</span></td>
                                                </tr>
                                                <tr>
                                                    <td>11:00-12:00 PM</td>
                                                    <td>Live Music<br /><span>By Guest Artists</span></td>
                                                    <td>Photo Booth Fun<br /><span>By Anjali Mehta</span></td>
                                                    <td>Grand Finale<br /><span>By Dream Aura Team</span></td>
                                                </tr>
                                                <tr>
                                                    <td>12:00-01:00 PM</td>
                                                    <td>Lunch & Networking<br /><span>By Catering Team</span></td>
                                                    <td>Games & Prizes<br /><span>By Vikram Singh</span></td>
                                                    <td>Farewell Brunch<br /><span>By Dream Aura Team</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== EVENT SCHEDULE TABLE END =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area d-lg-block d-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="cta1-main-boxarea">
                                        <div className="timer-btn-area">
                                            <Countdown />
                                            <div className="btn-area1">
                                                <Link href="/pricing-plan" className="vl-btn1">Book Now</Link>
                                            </div>
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
                                        <div className="timer-btn-area">
                                            <Countdown />
                                            <div className="btn-area1">
                                                <Link href="/pricing-plan" className="vl-btn1">Book Now</Link>
                                            </div>
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