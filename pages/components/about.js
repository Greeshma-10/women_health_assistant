import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="section about" aria-labelledby="about-label">
      <div className="container">
        <div className="about-content">
          <p className="section-subtitle title-lg has-after" id="about-label" data-reveal="left">About Us</p>
          <h2 className="headline-md" data-reveal="left">Experienced Workers</h2>
          <p className="section-text" data-reveal="left">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est.
            Aliquam
          </p>
          <ul className="tab-list" data-reveal="left">
            <li>
              <button className="tab-btn active">Vision</button>
            </li>
            <li>
              <button className="tab-btn">Mission</button>
            </li>
            <li>
              <button className="tab-btn">Strategy</button>
            </li>
          </ul>
          <p className="tab-text" data-reveal="left">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est.
            Aliquam a bibendum mi, sed condimentum
          </p>
          <div className="wrapper">
            <ul className="about-list">
              <li className="about-item" data-reveal="left">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <span className="span">Sonsectetur adipisicing elit</span>
              </li>
              <li className="about-item" data-reveal="left">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <span className="span">Exercitation ullamco laboris</span>
              </li>
              <li className="about-item" data-reveal="left">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <span className="span">Eiusmod tempor incididunt</span>
              </li>
              <li className="about-item" data-reveal="left">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <span className="span">Aolore magna aliqua</span>
              </li>
            </ul>
          </div>
        </div>
        <figure className="about-banner" data-reveal="right">
          <Image
            src="/assets/images/about-banner.png"
            width={554}
            height={678}
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
