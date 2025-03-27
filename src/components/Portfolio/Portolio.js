import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assest/shop.png";
import IMG2 from "../../assest/movie.png";
import IMG3 from "../../assest/twit.png";
import IMG4 from "../../assest/kanban.png";
import IMG5 from "../../assest/gym.png";

export default function Portfolio() {
  return (
    <section id="Portfolio" className="portfolio_section">
      <div className="pro">
      <h1>My Projects</h1>
      </div>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>Ecommerce website</h3>
          <p>
          A website that allows people to buy and sell physical goods, services,
and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can 
process orders, accept payments, manage shipping and logistics, 
and provide customer service
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahureshma/project-all/tree/ecommersewebsite"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://website-rho-roan.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
              Deployment link
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG2} alt="IMG2" />
          </div>
          <h3>Movie app</h3>
          <p>
          Movies are made to entertain audiences, and movie websites are
much the same . movie websites make it easy to take a couple
minutes and watch a few trailers before deciding which movie to see.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahureshma/project-all/tree/movieapp"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://movie-nine-omega.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
              Deployment link
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG3} alt="IMG3" />
          </div>
          <h3>Twitter Clone</h3>
          <p>
            This is team work project
            <br />
            Twitter is a service for friends, family, and coworkers to communicate
and stay connected through the exchange of quick ,frequent 
messages . People post Tweets which may contain photos, videos, 
links, and text.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahureshma/project-all/tree/twitterRs"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://twitter-clonefunction.netlify.app/"
              target="blank"
              className="btn btn-primary"
            >
              Deployment link
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG4} alt="IMG4" />
          </div>
          <h3>Kanban Board</h3>
          <p>
          A kanban board is an agile project management tool designed to
help visualize work, limit work-in-progress, and maximize efficiency.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahureshma/project-all/tree/rs"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://kanban-project-shekhar.netlify.app/"
              target="blank"
              className="btn btn-primary"
            >
              Deployment link
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img src={IMG5} alt="IMG5" />
          </div>
          <h3>Gym website</h3>
          <p>
            This is online gym site .
            <br />In this,Users can check the overview and features of the Gym.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahureshma/project-all/tree/gymwebsite"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://gym-tan-zeta.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
              Deployment link
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
            <img  alt="IMG6" />
          </div>
          <h3>Google Doc</h3>
          <p>
          Google Docs is a free web-based word processor in which documents 
can be created, edited and stored as part of the Google Docs Editors 
suite of free web applications.
             
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahureshma/project-all/tree/googledoc"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://google-drab-theta.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
              Deployment link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}