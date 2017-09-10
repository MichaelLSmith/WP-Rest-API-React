import React from 'react';


function Card(props) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{props.title}</p>
      </header>
      <div className="card-content">
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
}

export default Card;
