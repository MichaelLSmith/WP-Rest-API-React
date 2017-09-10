import React from 'react';


function Message(props) {
  return (
    <div className="message is-info">
      <div className="message-body">
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
}

export default Message;
