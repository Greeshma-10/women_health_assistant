import React from 'react';
import Image from 'next/image';


const services = [
  { title: 'Title 1', img: '/assets/images/icon-1.png', alt: 'icon', label: 'read more about psychiatry' },
  { title: 'Title 2', img: '/assets/images/icon-2.png', alt: 'icon', label: 'read more about Gynecology' },
  { title: 'Title 3', img: '/assets/images/icon-3.png', alt: 'icon', label: 'read more about Pulmonology' },
  { title: 'Title 4', img: '/assets/images/icon-4.png', alt: 'icon', label: 'read more about Orthopedics' },
];

const Service = () => {
  return (
    <section className="service" aria-label="service">
      <div className="container">
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-card" data-reveal="bottom">
                <div className="card-icon">
                  <Image src={service.img} width={71} height={71} loading="lazy" alt={service.alt} />
                </div>
                <h3 className="headline-sm card-title">
                  <a href="#">{service.title}</a>
                </h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                <button className="btn-circle" aria-label={service.label}>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
