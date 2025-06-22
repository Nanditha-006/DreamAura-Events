"use client";
import Header from "@/components/layout/header/Header1";
import Footer1 from "@/components/layout/footer/Footer1";

export default function DecorPage() {
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
          Event Decoration Services
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          At <strong>Dream Aura Events</strong>, we believe decor is the soul of
          every celebration. From concept to execution, our team crafts immersive
          atmospheres that reflect your unique story and elevate every moment.
        </p>

        {/* Section: Types of Decoration */}
        <h2 style={{ marginTop: 40, marginBottom: 16 }}>
          🌿 Types of Decoration We Offer
        </h2>
        <ul
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            paddingLeft: 20,
          }}
        >
          <li>
            <strong>Wedding Decor:</strong> Mandaps, floral arches, stage setups,
            and aisle styling
          </li>
          <li>
            <strong>Birthday & Baby Showers:</strong> Themed balloon work,
            welcome boards, cartoon cutouts
          </li>
          <li>
            <strong>Corporate Events:</strong> Elegant minimalistic branding
            setups, entrance decor
          </li>
          <li>
            <strong>Traditional & Cultural Functions:</strong> Authentic elements
            with modern design fusion
          </li>
        </ul>

        {/* Section: Why Decor Matters */}
        <h2 style={{ marginTop: 40, marginBottom: 16 }}>
          🎯 Why Decoration Matters
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
          Good decor doesn’t just make a venue pretty—it sets the emotional tone
          of the event. It guides your guests’ attention, creates photographic
          memories, and defines your event’s personality. With the right lighting,
          textures, colors, and spatial arrangement, we ensure every inch reflects
          elegance and joy.
        </p>

        {/* Section: Our Signature Touch */}
        <h2 style={{ marginTop: 40, marginBottom: 16 }}>
          💫 Reimagining Expectations
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
          Our in-house designers continuously innovate by blending nature,
          technology, and art. Whether it's a starry ceiling illusion, flower
          chandelier, or a surprise reveal stage—our goal is to make your event
          not just beautiful but unforgettable.
        </p>

        {/* Images */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 20,
            marginTop: 40,
          }}
        >
          <img
            src="/assets/img/all-images/decoration/img1.png"
            alt="memory"
            style={{ width: "300px", borderRadius: 12 }}
          />
          <img
            src="/assets/img/all-images/decoration/img2.png"
            alt="memory"
            style={{ width: "300px", borderRadius: 12 }}
          />
          <img
            src="/assets/img/all-images/decoration/img3.png"
            alt="memory"
            style={{ width: "300px", borderRadius: 12 }}
          />
        </div>

        {/* Closing CTA */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <h3>Ready to turn your dream into reality?</h3>
          <p>Let Dream Aura Events design a space that speaks your soul.</p>
          <a
            href="/contact"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 6,
              display: "inline-block",
              marginTop: 16,
              textDecoration: "none",
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