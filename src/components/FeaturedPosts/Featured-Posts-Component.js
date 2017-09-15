import React from 'react';
import styled from 'styled-components';


function FeaturedPosts() {
  return (
    <div className="tile is-ancestor">

      <div className="tile is-vertical is-8">{/*first two columns?  */}

        <section className="tile">{/*left column  */}
          <div className="tile is-parent is-vertical">
            <article className="tile is-child box">
              <p className="title">Post One</p>
              <p className="subtitle">Subtitle</p>
            </article>
            <article className="tile is-child box">
              <p className="title">Post Two</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
        </section>
        <section className="tile is-parent">
          <article className="tile is-child box">
            <figure className="image is-4by3">
              <img src="http://bulma.io/images/placeholders/640x480.png" />
            </figure>
            <p className="title">Post 3</p>
            <p className="subtitle">With an image</p>
          </article>
        </section>
        <section className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Post 4</p>
            <p className="subtitle">Aligned with the right column</p>
            <div className="content">
              <p>Thou spongy doghearted pigeon-egg! Thou adulterate decayed horse-drench! Thou base clapper-clawed boar-pig! Thou soulless tallow-faced clack-dish! Thou dissembling fool-born eternal devil! Thou gleeking fly-bitten bum-bailey! Thou jarring ill-bred no bowels! Thou creeping common-kissing malt-worm! Thou rank prick-eared coxcomb!</p>
            </div>
          </article>
        </section>
      </div>{/* tile is-vertical is-8 (first two columns) */}
      <div className="tile is-parent right-column">
        <article className="tile is-child box">
          <figure className="image is-4by3">
            <img src="http://bulma.io/images/placeholders/640x480.png" />
          </figure>
          <div className="content">
            <p className="title">Post 5</p>
            <p className="subtitle">Full height content</p>
          </div>
        </article>
      </div>



    </div> //tile ancestor

  );
}

export default FeaturedPosts;
