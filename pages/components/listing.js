import React from 'react';
import Image from 'next/image';

const doctors = [
  {
    title: 'Title 1',
    description: 'Porta velit',
    icon: '/assets/images/icon-1.png',
  },
  {
    title: 'Title 2',
    description: 'Mattis augue',
    icon: '/assets/images/icon-2.png',
  },
  {
    title: 'Title 3',
    description: 'Mauris laoreet',
    icon: '/assets/images/icon-4.png',
  },
  {
    title: 'Title 4',
    description: 'Convallis vulputate',
    icon: '/assets/images/icon-5.png',
  },
  {
    title: 'Title 5',
    description: 'Posuere maecenas',
    icon: '/assets/images/icon-6.png',
  },
  {
    title: 'Title 6',
    description: 'Nisi nullam',
    icon: '/assets/images/icon-7.png',
  },
];

const Listing = () => {
  return (
    <section className="section listing" aria-labelledby="listing-label">
      <div className="container">
        <ul className="grid-list">
          <li>
            <p className="section-subtitle title-lg" id="listing-label" data-reveal="left">Doctors Listing</p>
            <h2 className="headline-md" data-reveal="left">Browse by specialist</h2>
          </li>
          {doctors.map((doctor, index) => (
            <li key={index}>
              <div className="listing-card" data-reveal="bottom">
                <div className="card-icon">
                  <Image
                    src={doctor.icon}
                    width={71}
                    height={71}
                    loading="lazy"
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="headline-sm card-title">{doctor.title}</h3>
                  <p className="card-text">{doctor.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Listing;
