import React from 'react';
import styled from 'styled-components';

import SmallPost from './components/Small-Post';

const thumbnail = 'http://bulma.io/images/placeholders/128x128.png';
const content =
        "Come, come, you talk greasily; your lips grow foul. Hast thou never an eye in thy head? Thou clouted crook-pated hugger-mugger! Thou dissembling idle-headed pigeon-egg! Thou mangled fen-sucked bum-bailey! Thou leathern-jerkin, crystal-button, knot-pated, agatering, puke-stocking, caddis-garter, smooth-tongue, Spanish pouch! Thou rank hedge-born boar-pig! Thou wimpled clapper-clawed flax-wench! Thou qualling unwash'd devil-mon!"
const excerpt =
        "Come, come, you talk greasily; your lips grow foul. Hast thou never an eye in thy head? Thou clouted crook-pated hugger-mugger!"

function FeaturedPosts(props) {
  return (
    <div className="tile is-ancestor">

      <div className="tile is-vertical is-8">{/* first two columns? */}

        <section className="tile">{/* first two rows (3 posts) */}
          <div className="tile is-parent is-vertical">
            <SmallPost
              title="Post One"
              author="John Smith"
              date="Jan 27, 1975"
              thumbnail={thumbnail}
              excerpt={excerpt}
            />
            <SmallPost
              title="Post Two"
              author="Rover Dog"
              date="February 23, 2017"
              thumbnail={thumbnail}
              excerpt={excerpt}
            />
          </div>

          <article className="tile is-parent">
            <div className="tile is-child box">
              <figure className="image is-4by3">
                <img src="http://bulma.io/images/placeholders/640x480.png" />
              </figure>
              <p className="title">Post 3</p>
              <p className="subtitle">With an image</p>
            </div>
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
            <div className="content is-medium">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
            </div>
          </div>
        </article>
      </div>



    </div> //tile ancestor

  );
}

export default FeaturedPosts;
