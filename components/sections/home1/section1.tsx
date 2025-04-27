import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section1() {
	return (
		<>
			<div className="hero1-section-area">
				<div className="bg1">
					<img src="/assets/img/bg/header-bg2.png" alt="" className="header-bg1" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="hero1-header heading1">
								<h5 data-aos="fade-left" data-aos-duration={800}>
									<img src="/assets/img/icons/sub-logo1.svg" alt="" /> Dream Aura Events
								</h5>
								<div className="space16" />
								<h1 className="text-anime-style-3">
									Giving Life to Your Memories<br className="d-lg-block d-none" />
									with Elegance & Style
								</h1>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={900}>
									Let us turn your special day into a timeless memory. <br className="d-lg-block d-none" />
									Weddings, Birthdays, Corporate Events & more!
								</p>
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
									<Link href="/booking" className="vl-btn1">Book an Event</Link>
									<Link href="/gallery" className="vl-btn2">View Gallery</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="header-images">
								<div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
									<img src="/assets/images/dreamaura-hero.png" alt="Dream Aura Events" />
								</div>
								<div className="images-content-area" data-aos="fade-up" data-aos-duration={900}>
									<h3>DREAM AURA SPECIAL</h3>
									<div className="space12" />
									<Link href="/#">Now Accepting 2025 Bookings</Link>
									<div className="space12" />
									<Link href="/#">Chennai | Bangalore | Coimbatore</Link>
									<div className="space16" />
									<p>
										Celebrate your moments with style. From intimate gatherings to grand galas,
										we craft every event with love.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-1">
							<Countdown />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
