import React from 'react'
import './Landing.css'
import logo from '../assets/images/logo.svg'
import flag from '../assets/images/flag.png'
import sparkles from '../assets/images/sparkles.svg'
import svg1 from '../assets/images/section-1.svg'
import svg2 from '../assets/images/section-2.svg'
import svg3 from '../assets/images/section-3.svg'
import svg4 from '../assets/images/section-4.svg'

const Landing = () => {
  return (
    <>
    <section className="hero">
    <header className="main-header container">
        <nav className="main-nav">
            <a href="index.html" className="logo">
                <img src="../assets/images/logo.svg" alt=""/>
            </a>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#" className="nav-link">Download</a>
                </li>
            </ul>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#" className="nav-link">Why Discord</a>
                </li>
            </ul>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#" className="nav-link">Nitro</a>
                </li>
            </ul>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#" className="nav-link">Safety</a>
                </li>
            </ul>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#" className="nav-link">Support</a>
                </li>
            </ul>

            <div className="nav-items-right">
                <a href="#" className="btn btn-small btn-light btn-login">Login</a>
                <span className="mobile-toggle">
                    <i className="bx bx-menu btn-open"></i>
                    <i className="bx bx-x btn-close"></i>
                </span>
            </div>
        </nav>
    </header>
    <div className="row container">
        <div className="hero-content-wrap">
            <h1 className="title primary-title">Your place to talk</h1>
            <p className="hero-description">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div className="hero-btn-group">
                <a href="#" className="btn btn-large btn-light">
                    <i className="bx bx-download"></i>
                    Download for MacOs
                </a>
                <a href="#" className="btn btn-large btn-dark">
                    Open Discord in your browser
                </a>
            </div>
        </div>
    </div>
</section>

<section className="collaboration">
    <div className="row container">
        <img src={svg1} alt="section1" className="grid-image"/>
        <div className="text-group">
            <h2 className="title secondary-title">
                An invite-only place with plenty of room to talk
            </h2>
            <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
        </div>
    </div>
</section>

<svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
   <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
</svg>

<section className="voice-channel">
    <div className="row container">
        <img src={svg2} alt="" className="grid-image order-2"/>
        <div className="text-group order-1">
            <h2 className="title secondary-title">Where hanging out is easy</h2>
            <p>Grab a seat in a voice channel when you&apos;re free. Friends in your server can see you&apos;re around and instantly pop in to talk without having to call</p>
        </div>
    </div>
</section>

<svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
 </svg>

 <section className="moderation-tools">
    <div className="row container">
        <img src={svg3} alt="" className="grid-image order-2"/>
        <div className="text-group order-1">
            <h2 className="title secondary-title">From a few to a fandom</h2>
            <p>Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
        </div>
    </div>
</section>

<svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
 </svg>

 <section className="video-call">
    <div className="row container">
        <div className="text-group">
            <h2 className="title secondary-title">Reliable tech for staying close</h2>
            <p>Low-latency voice and video feels like you&apos;re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        </div>
        <img src={svg4} alt="" className="grid-image"/>
    </div>
</section>

<section className='download'>
    <div className="row container remove-grid">
        <img src={sparkles} alt="" className='sparkles'/>
        <h2>Ready to start your journey?</h2>
        <a href="#" className="btn btn-large btn-brand">
            <i className="bx bx-download"></i> Download for Windows
        </a>
    </div>
</section>

<footer className="main-footer">
    <div className="row container">
        <div className="info-box">
            <h4 className="footer-title">Your place to talk</h4>
            <div className="languages">
                <img src={flag} alt="" />
                <span>English, USA</span> <i className="bx bx-chevron-down"></i>
            </div>
            <div className="social-media">
                <a href="#" className="sm-link">
                    <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="sm-link">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="sm-link">
                    <i className="bx bxl-facebook-square"></i>
                </a>
                <a href="#" className="sm-link">
                    <i className="bx bxl-youtube"></i>
                </a>
            </div>
        </div>
        <div className="spacer"></div>
        <div className="footer-links-group">
            <h5 className="footer title">Product</h5>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
        </div>
        <div className="footer-links-group">
            <h5 className="footer title">Product</h5>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
        </div>
        <div className="footer-links-group">
            <h5 className="footer title">Product</h5>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
        </div>
        <div className="footer-links-group">
            <h5 className="footer title">Product</h5>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
            <a href="#" className="footer-link">Download</a>
        </div>

        <div className="divider"></div>
    </div>

    <div className="row-container remove-grid">
        <a href="index.html" className="logo">
            <img src={logo} alt="" />
        </a>
        <a href="#" className="btn btn-small btn-brand">Login</a>
    </div>
</footer>
    </>
  )
}

export default Landing