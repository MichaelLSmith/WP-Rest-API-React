import React from 'react';

function NewsletterForm(props) {
  return (
    <form action="">
      <p className="field">Subscribe to our Newsletter</p>
      <div className="control">
        <input className="input" type="text" placeholder="Your Email" />
      </div>
      <div className="control">
        <button className="button is-primary" type="submit">
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default NewsletterForm;
