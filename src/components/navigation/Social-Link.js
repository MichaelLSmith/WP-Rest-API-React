import React from 'react';

function SocialLink(props) {
  const displayClass = `navbar-item ${props.view}`;
  return (
    <a
      className={displayClass}
      href={props.url} target="_blank"
    >
      <span className="icon" style={{color: props.color}}>
        <i className={props.icon}></i>
      </span>
    </a>

  );
}

export default SocialLink;
