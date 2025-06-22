"use client";
import Head from "next/head";
import Header from "@/components/layout/header/Header1";
import Footer1 from "@/components/layout/footer/Footer1";
import Link from "next/link";

export default function PhotographyPage() {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
                    integrity="sha512-9usAa10I+Br5D+eAG5unFBSuHfCr0D1F5GZ5Y03jH2G9e4KLwckH5Y2HxC1OdAd9hZ9xZgksUJ+QvGgPi2dZ1w=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>

            {/* Header with black background */}
            <div style={{ backgroundColor: "#000" }}>
                <Header />
            </div>

            {/* Main Content */}
            <div
                style={{
                    padding: "60px 20px",
                    paddingTop: "100px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    color: "#333",
                }}
            >
                {/* Heading */}
                <h1 style={{ textAlign: "center", marginBottom: 24, textTransform: "uppercase", fontSize: 28, fontWeight: "bold" }}>
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
                    At <strong>Dream Aura Events</strong>, we don’t just capture moments—we preserve memories.
                    Our professional photographers document emotions, energy, and elegance with artistic precision,
                    turning fleeting moments into timeless treasures.
                </p>

                {/* Section: Types of Photography */}
                <h2 style={{ marginTop: 40, marginBottom: 16, textTransform: "uppercase", fontSize: 18, fontWeight: "bold" }}>
                    📸 What We Capture
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.8', paddingLeft: 20 }}>
                    <li><strong>Candid Photography:</strong> Pure, unscripted emotions caught in real-time</li>
                    <li><strong>Traditional Photography:</strong> Posed photos, rituals, and full event coverage</li>
                    <li><strong>Pre-wedding & Couple Shoots:</strong> Creative, location-based storytelling</li>
                    <li><strong>Birthday & Corporate Events:</strong> Highlight reels and coverage with flair</li>
                </ul>

                {/* Section: Why It Matters */}
                <h2 style={{ marginTop: 40, marginBottom: 16, textTransform: "uppercase", fontSize: 18, fontWeight: "bold" }}>
                    🎯 Why Professional Photography Is Important
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    Photographs are lasting keepsakes. With the right lens, lighting, and eye for detail, our team ensures
                    every shot tells a story—be it the sparkle of your entry, the laughter of loved ones, or the grandeur of your décor.
                </p>

                {/* Section: Dream Aura's Signature Style */}
                <h2 style={{ marginTop: 40, marginBottom: 16, textTransform: "uppercase", fontSize: 18, fontWeight: "bold" }}>
                    💫 Capturing More Than Just Images
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    Our photographers work with an editorial eye and a cinematic feel. Whether it's a slow-motion twirl on the dance floor
                    or a quiet smile exchanged across the mandap—we capture the invisible magic others miss.
                    We deliver not just photos, but a visual legacy of your celebration.
                </p>

                {/* Images */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 20, marginTop: 40 }}>
                    <img src="/assets/img/all-images/photography/img1.png" alt="photography" style={{ width: '300px', borderRadius: 12 }} />
                    <img src="/assets/img/all-images/photography/img2.png" alt="photography" style={{ width: '300px', borderRadius: 12 }} />
                    <img src="/assets/img/all-images/photography/img3.png" alt="photography" style={{ width: '300px', borderRadius: 12 }} />
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: 60 }}>
                    <h3 style={{ textTransform: "uppercase", fontSize: 18, fontWeight: "bold" }}>
                        Let us capture your magic!
                    </h3>
                    <p style={{ fontSize: '16px' }}>
                        Book our photography team today and treasure your event forever through our lens.
                    </p>
                    <Link
                        href="/contact"
                        style={{
                            backgroundColor: '#000',
                            color: '#fff',
                            padding: '10px 24px',
                            borderRadius: 6,
                            display: 'inline-block',
                            marginTop: 16,
                            textDecoration: 'none',
                            fontFamily: "'Poppins', Arial, sans-serif"
                        }}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            <Footer1 />
        </>
    );
}