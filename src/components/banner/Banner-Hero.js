import React from 'react';
import styled from 'styled-components';
import { HeroHeading, HeroSubHeading } from '../styled/Hero-Components';
import Card from './Card';
import Message from './Message';

const cardContent =
"You base football-player! You crooked-nose knave! You puterell, you skalemar. You hedge-born levereter, you bedswerver fopdoodle! Ye olde mucksprout and mumblecrust. You rakefile skobberlotcher."

function BannerHero(props) {
  const HeroWithBackground =
    styled.div.attrs({
      className: 'hero is-medium'
    })`
      background-image: url(${props.img});
      background-position: center center;
      background-size: cover;
    `
  return (
    <HeroWithBackground img={props.img}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <section className="column is-three-quarters">
              <div>
                <HeroHeading>Thou art the best of cutthroats,</HeroHeading>
              </div>
              <div>
                <HeroSubHeading>a natural coward without instinct.</HeroSubHeading>
              </div>
            </section>
            <section className="column">
              <Message content={cardContent} />
            </section>
          </div>
        </div>
      </div>
    </HeroWithBackground>
  )
}
export default BannerHero;

// There’s no more faith in thee than a stewed prune. Thou art a boil, a plague sore, an embossed carbunkle in my corrupted blood. Away you three inch fool! Thou art a natural coward without instinct. You, minion, are too saucy. Thou art the best of cutthroats. A weasel has not such a spleen as you are toss’d with. Your virginity breeds mites, much like a cheese. Thou leathern-jerkin, crystal button, knot-pated, agatering, puke-stocking, caddis-garter, smooth tongue, Spanish pouch. Thou art the son and heir of a mongrel bitch.
