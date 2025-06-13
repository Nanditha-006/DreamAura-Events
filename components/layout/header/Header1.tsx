import Link from 'next/link'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	return (
		<>
			<header>
				<div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="header-elements">
									{/* Logo */}
									<div className="site-logo">
										<Link href="/">
											<span style={{
												fontWeight: 900,
												fontSize: 70,
												fontFamily: "Arial, sans-serif",
												color: "#fff",
												letterSpacing: 1
											}}>
												Dream Aura Events
											</span>
										</Link>
									</div>

									{/* Menu */}
									<div className="main-menu">
										<ul>
											<li>
												<Link href="/">HOME</Link>
											</li>
											<li>
												<Link href="/memories">Gallery</Link>
											</li>
											<li>
												<Link href="/contact">Contact</Link>
											</li>
										</ul>
									</div>

									{/* Social Icons */}
									<div className="btn-area">
										<ul>
											<li>
												<Link href="#"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="#"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="#" className="m-0"><i className="fa-brands fa-pinterest-p" /></Link>
											</li>
										</ul>
									</div>

									{/* Removed search icon and search form here */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}