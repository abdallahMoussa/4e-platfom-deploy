import React from 'react'
import mask from "../assets/hero/hero-blob-1.svg"
import image from "../assets/hero/hero-home.jpg"
const Hero = () => {
    const imgStyle: React.CSSProperties = {
        WebkitMaskImage: `url(${mask})`,
        maskImage: `url(${mask})`,
      };
  return (
          
    <section id="scrollspyHero" className="bsb-hero-2 bsb-tpl-bg-blue py-0 py-xl-1 py-xxl-2">
    <div className="container overflow-hidden">
      <div className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
        <div className="col-12 col-lg-6 order-1 order-lg-0">
          <h1 className="display-3 fw-bolder mb-3">We provide easy <br /><mark className="bsb-tpl-highlight bsb-tpl-highlight-blue"><span className="bsb-tpl-font-hw display-2 text-accent fw-normal">solutions</span></mark> for startups at affordable rates.</h1>
          <div className="d-grid gap-2 d-sm-flex">
            <button type="button" className="btn btn-primary bsb-btn-3xl rounded-pill">Free Consultation</button>
            <button type="button" className="btn btn-outline-primary bsb-btn-3xl rounded-pill">Buy Credits</button>
          </div>
        </div>
        <div className="col-12 col-lg-5 text-center">
        <img
          className="img-fluid"
              loading="lazy"
              width={300}
          src={image}
          alt=""
          style={imgStyle}
        />    </div>
      </div>
    </div>
    </section>
    
  )
}

export default Hero