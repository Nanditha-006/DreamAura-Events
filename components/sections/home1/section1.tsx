import Link from 'next/link'

export default function Section1() {
    return (
        <>
            <div className="hero1-section-area" style={{ fontFamily: "Arial, sans-serif" }}>
                <div className="bg1">
                    <img src="/assets/img/bg/header-bg2.png" alt="" className="header-bg1" />
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10">
                            <div className="hero1-header heading1">
                                <h1 className="text-anime-style-3" style={{ fontWeight: 600, fontSize: 38, color: '#fff', fontFamily: "Arial, sans-serif" }}>
                                    Creating Timeless Memories<br className="d-lg-block d-none" />
                                    With Passion
                                </h1>

                                <div style={{ height: 18 }} />

                                <p style={{ fontWeight: 600, fontSize: 24, color: "#fff", lineHeight: 1.6 }}>
                                    At Dream Aura Events, we specialize in crafting unforgettable experiences.<br />
                                    From weddings to corporate events, our team ensures every detail is handled with precision and creativity.
                                </p>

                                <div style={{ height: 32 }} />

                                {/* <h3 style={{ fontWeight: 700, fontSize: 26, color: "#fff", marginBottom: 12 }}>
                                    Now Accepting Bookings
                                </h3>

                                <p style={{ fontWeight: 600, fontSize: 24, color: "#fff", marginBottom: 16 }}>
                                    Chennai | Bangalore | Coimbatore
                                </p>

                                <p style={{ fontWeight: 500, fontSize: 25, color: "#fff", lineHeight: 1.6 }}>
                                    From intimate gatherings to grand celebrations,<br />
                                    we design every event with heart, creativity, and precision.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}