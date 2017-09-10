import React from 'react';
import H1Title from './styled/H1-Title';
import NewsletterForm from './NewsletterForm';

function Home(props) {
  return (
    <div className="home container">
      <H1Title>Hard Coded HOME</H1Title>
      <NewsletterForm />
    </div>
  )
}

export default Home;
