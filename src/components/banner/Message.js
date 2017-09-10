import React from 'react';
import styled from 'styled-components';

const Container =
  styled.div.attrs({
    className: 'message is-info'
  })`
    max-width: 75%;
  `


function Message(props) {
  return (
    <Container>
      <div className="message-body">
        <div className="content">{props.content}</div>
      </div>
    </Container>
  );
}

export default Message;
