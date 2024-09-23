import React from 'react';

const articles = [
  {
    title: 'Could intermittent fasting reduce breast cancer',
    date: '2022-01-28',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    author: 'By Admin',
    category: 'Specialist',
  },
  {
    title: 'Give children more autonomy during the pandemic',
    date: '2022-01-28',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    author: 'By Admin',
    category: 'Specialist',
  },
  {
    title: 'How do binge eating and drinking impact the liver?',
    date: '2022-01-28',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    author: 'By Admin',
    category: 'Specialist',
  },
];

const Blog = () => {
  return (
    <section className="section blog" aria-labelledby="blog-label">
      <div className="container">
        <p className="section-subtitle title-lg text-center" id="blog-label" data-reveal="bottom">
          News & Article
        </p>
        <h2 className="section-title headline-md text-center" data-reveal="bottom">Latest Articles</h2>
        <ul className="grid-list">
          {articles.map((article, index) => (
            <li key={index}>
              <div className="blog-card has-before has-after" data-reveal="bottom">
                <div className="meta-wrapper">
                  <div className="card-meta">
                    <ion-icon name="person-outline"></ion-icon>
                    <span className="span">{article.author}</span>
                  </div>
                  <div className="card-meta">
                    <ion-icon name="folder-outline"></ion-icon>
                    <span className="span">{article.category}</span>
                  </div>
                </div>
                <h3 className="headline-sm card-title">{article.title}</h3>
                <time className="title-sm date" dateTime={article.date}>{new Date(article.date).toLocaleDateString()}</time>
                <p className="card-text">{article.description}</p>
                <a href="#" className="btn-text title-lg">Read More</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
