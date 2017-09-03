import React from 'react';
import styled from 'styled-components';

const RadiusDiv =
  styled.div`
    border: green;
    color: white;
    border-radius: 35%;
    background-color: green;
    padding: .5em;
  `
;

function Logo(props) {
  return (
  <RadiusDiv>
    M S
  </RadiusDiv>
  )

}

export default Logo;
