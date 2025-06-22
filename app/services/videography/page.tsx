"use client";
import Header from "@/components/layout/header/Header1";
import Footer1 from "@/components/layout/footer/Footer1";

export default function VideographyPage() {
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
                    Videography Services
                </h1>
                <p
                    style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        textAlign: "center",
                        marginBottom: 40,
                    }}
                >
                    At <strong>Dream Aura Events</strong>, we don’t just film events — we craft cinematic stories. From slow-motion vows to aerial shots of grand entrances, our videography brings your moments to life with elegance and emotion.
                </p>

                {/* Section: What We Offer */}
                <h2 style={{ marginTop: 40, marginBottom: 16 }}>🎥 Our Videography Includes</h2>
                <ul style={{ fontSize: "16px", lineHeight: "1.8", paddingLeft: 20 }}>
                    <li><strong>Full Event Coverage:</strong> Every key moment, from start to send-off</li>
                    <li><strong>Cinematic Highlights:</strong> Artistically edited reels with background music</li>
                    <li><strong>Drone Shots:</strong> Aerial perspectives that elevate storytelling</li>
                    <li><strong>Pre-wedding Films:</strong> Personalized love stories shot and scripted with care</li>
                </ul>

                {/* Section: Why Videography Is Important */}
                <h2 style={{ marginTop: 40, marginBottom: 16 }}>🎯 Why It Matters</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                    A video brings your event back to life — the laughter, the music, the tears, the vows. It's a time machine for your emotions. We make sure your film doesn’t just document the day but tells the story in a cinematic and heartfelt way.
                </p>

                {/* Section: Dream Aura’s Signature Edge */}
                <h2 style={{ marginTop: 40, marginBottom: 16 }}>💫 Your Story, Cinematically Told</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                    Our expert videographers combine creativity and technology to deliver stunning visuals and immersive sound. Whether it’s a romantic pre-wedding shoot or a high-energy reception reel, we frame your narrative with elegance and style.
                </p>

                {/* Images */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 20, marginTop: 40 }}>
                    <img src="/assets/img/all-images/videography/img1.png" alt="videography" style={{ width: '300px', borderRadius: 12 }} />
                    <img src="/assets/img/all-images/videography/img2.png" alt="videography" style={{ width: '300px', borderRadius: 12 }} />
                    <img src="/assets/img/all-images/videography/img3.png" alt="videography" style={{ width: '300px', borderRadius: 12 }} />
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: 60 }}>
                    <h3>Let’s make your story unforgettable!</h3>
                    <p>Get in touch to book our videography team and relive your day, frame by frame.</p>
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