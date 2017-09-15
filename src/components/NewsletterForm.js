import React from 'react';

function NewsletterForm(props) {
  return (
      <div className="columns">
        <form className="column is-half is-offset-one-quarter" action="">
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
      </div>
  );
}

export default NewsletterForm;
