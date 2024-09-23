// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Service from './components/service';
import About from './components/about';
import Listing from './components/listing';
import Blog from './components/blog';
import Footer from './components/footer';



export default function Home() {
  return (
    <>
      <Head>
        <title>Doclab - Home</title>
        <meta name="description" content="This is a medical HTML template made by codewithsadee" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
       
        
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
         <link rel="stylesheet" href="/assets/css/style.css" />
         <link rel="preload"  href="/assets/images/hero-banner.png"/>
        <link rel="preload" href="/assets/images/hero-bg.png"/>
        <script src="/assets/js/script.js" defer></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

      </Head>
      

      
      {/* PRELOADER */}
      <div className="preloader" data-preloader>
        <div className="circle"></div>
      </div>

      

      {/* HEADER */}
      <header className="header" data-header>
        <div className="container">
          <Link href="/" className="logo">
            <Image src="/assets/images/logo.svg" width={136} height={46} alt="Doclab home" />
          </Link>
          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <Link href="/" className="logo">
                <Image src="/assets/images/logo.svg" width={136} height={46} alt="Doclab home" />
              </Link>
              <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link href="/" className="navbar-link title-md">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link href="/" className="navbar-link title-md">
                  Doctors
                </Link>
              </li>
              <li className="navbar-item">
                <Link href="/" className="navbar-link title-md">
                  Services
                </Link>
              </li>
              <li className="navbar-item">
                <Link href="/" className="navbar-link title-md">
                  Blog
                </Link>
              </li>
              <li className="navbar-item">
                <Link href="/" className="navbar-link title-md">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
              <ion-icon name="menu-outline"></ion-icon>
            </button>
            
            <Link href="/" className="btn has-before title-md">
              Make Appointment
            </Link>
            <div className="overlay" data-nav-toggler data-overlay></div>
          </nav>
        </div>
      </header>
     

      {/* HERO SECTION */}
      <section className="section hero" style={{ backgroundImage: 'url("/assets/images/hero-bg.png")' }}>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle has-before" data-reveal="left">
              Welcome To Doclab
            </p>
            <h1 className="headline-lg hero-title" data-reveal="left">
              Find Nearest <br />
              Doctor.
            </h1>
            <div className="hero-card" data-reveal="left">
              <p className="title-lg card-text">Search doctors, clinics, hospitals, etc.</p>
              <div className="wrapper">
                <div className="input-wrapper title-lg">
                  <input type="text" name="location" placeholder="Locations" className="input-field" />
                  <ion-icon name="location"></ion-icon>
                </div>
                <button className="btn has-before">
                  <ion-icon name="search"></ion-icon>
                  <span className="span title-md">Find Now</span>
                </button>
              </div>
            </div>
          </div>
          <figure className="hero-banner" data-reveal="right">
            <Image src="/assets/images/hero-banner.png" width={590} height={517} alt="hero banner" />
          </figure>
        </div>
      </section>
      
      <Service />
      <About />
      <Listing />
      <Blog />
      <Footer/>
      <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up"></ion-icon>
      </a>
    </>
  );
}