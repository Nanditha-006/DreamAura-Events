"use client";
import Header from "@/components/layout/header/Header1";
import Footer1 from "@/components/layout/footer/Footer1";

export default function PhotographyPage() {
    return (
        <>
            <Header />
            <div
                style={{
                    padding: "60px 20px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    fontFamily: "'Poppins', Arial, sans-serif",
                }}
            >
                {/* Heading */}
                <h1 style={{ textAlign: "center", marginBottom: 24 }}>
                    Photography Services
                </h1>
                <p
                    style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        textAlign: "center",
                        marginBottom: 40,
                    }}
                >
                    At <strong>Dream Aura Events</strong>, we don’t just capture moments—we preserve memories. Our professional photographers document emotions, energy, and elegance with artistic precision, turning fleeting moments into timeless treasures.
                </p>

                {/* Section: Types of Photography */}
                <h2 style={{ marginTop: 40, marginBottom: 16 }}>📸 What We Capture</h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.8', paddingLeft: 20 }}>
                    <li><strong>Candid Photography:</strong> Pure, unscripted emotions caught in real-time</li>
                    <li><strong>Traditional Photography:</strong> Posed photos, rituals, and full event coverage</li>
                    <li><strong>Pre-wedding & Couple Shoots:</strong> Creative, location-based storytelling</li>
                    <li><strong>Birthday & Corporate Events:</strong> Highlight reels and coverage with flair</li>
                </ul>

                {/* Section: Why It Matters */}
                <h2 style={{ marginTop: 40, marginBottom: 16 }}>🎯 Why Professional Photography Is Important</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    Photographs are lasting keepsakes. With the right lens, lighting, and eye for detail, our team ensures every shot tells a story—be it the sparkle of your entry, the laughter of loved ones, or the grandeur of your décor.
                </p>

                {/* Section: Dream Aura's Signature Style */}
                <h2 style={{ marginTop: 40, marginBottom: 16 }}>💫 Capturing More Than Just Images</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    Our photographers work with an editorial eye and a cinematic feel. Whether it's a slow-motion twirl on the dance floor or a quiet smile exchanged across the mandap—we capture the invisible magic others miss. We deliver not just photos, but a visual legacy of your celebration.
                </p>

                {/* Images */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 20, marginTop: 40 }}>
                    <img src="/assets/img/all-images/photography/img1.png" alt="photography" style={{ width: '300px', borderRadius: 12 }} />
                    <img src="/assets/img/all-images/photography/img2.png" alt="photography" style={{ width: '300px', borderRadius: 12 }} />
                    <img src="/assets/img/all-images/photography/img3.png" alt="photography" style={{ width: '300px', borderRadius: 12 }} />
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: 60 }}>
                    <h3>Let us capture your magic!</h3>
                    <p>Book our photography team today and treasure your event forever through our lens.</p>
                    <a
                        href="/contact"
                        style={{
                            backgroundColor: '#000',
                            color: '#fff',
                            padding: '10px 24px',
                            borderRadius: 6,
                            display: 'inline-block',
                            marginTop: 16,
                            textDecoration: 'none'
                        }}
                    >
                        Contact Us
                    </a>
                </div>
            </div>
            <Footer1 />
        </>
    );
}