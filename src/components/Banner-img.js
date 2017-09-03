import React from 'react';
import styled from 'styled-components';

function Banner(props) {
  console.log(props);
  const Background =
    styled.div`
      background-image: url(${props.img});
      background-position: center center;
      background-size: cover;
    `
  return (
    <Background img={props.img}>Test</Background>
    // /* <div>
    //   Banner here
    // </div> */



  )
}
export default Banner;
