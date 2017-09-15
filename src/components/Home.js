import React from 'react';
import H1Title from './styled/H1-Title';


import FeaturedPosts from './FeaturedPosts/Featured-Posts-Component';
//this will import Featured-Posts-Container which will get the content from the API

import NewsletterForm from './NewsletterForm';

function Home(props) {
  return (
    <div className="home">
      <section className="section">
        <div className="container">
          <H1Title>Hard Coded HOME</H1Title>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FeaturedPosts />
        </div>
      </section>





      <section className="section">
        <div className="container">
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}

export default Home;
