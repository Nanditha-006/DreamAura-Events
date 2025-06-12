import Link from 'next/link'

export default function Section1() {
    return (
        <>
            <div className="hero1-section-area" style={{ fontFamily: "Arial, sans-serif" }}>
                <div className="bg1">
                    <img src="/assets/img/bg/header-bg2.png" alt="" className="header-bg1" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero1-header heading1">
                                <h5 data-aos="fade-left" data-aos-duration={800} style={{ fontWeight: 700 }}>
                                    <img src="/assets/img/icons/sub-logo1.svg" alt="" /> Dream Aura Events
                                </h5>
                                <div className="space16" />
                                <h1 className="text-anime-style-3" style={{ fontWeight: 700, fontSize: 48 }}>
                                    Creating Timeless Memories<br className="d-lg-block d-none" />
                                    with Passion
                                </h1>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900} style={{ fontWeight: 600, fontSize: 20, color: "#fff" }}>
                                    At Dream Aura Events, we specialize in crafting unforgettable experiences.<br className="d-lg-block d-none" />
                                    From weddings to corporate events, our team ensures every detail is handled with precision and creativity.
                                </p>
                                <div className="space32" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="header-images">
                                <div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
                                    <img src="/assets/images/dreamaura-hero.png" alt="Dream Aura Events" />
                                </div>
                                <div className="images-content-area" data-aos="fade-up" data-aos-duration={900}>
                                    <h3 style={{ fontWeight: 700 }}>DREAM AURA SPECIAL</h3>
                                    <div className="space12" />
                                    <Link href="/#">Now Accepting Bookings</Link>
                                    <div className="space12" />
                                    <Link href="/#">Chennai | Bangalore | Coimbatore</Link>
                                    <div className="space16" />
                                    <p style={{ fontWeight: 500 }}>
                                        From intimate gatherings to grand celebrations, <br />
                                        we design every event with passion and precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Countdown removed */}
                    </div>
                </div>
            </div>
        </>
    )
}

