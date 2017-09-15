import React from 'react';

function SmallPost(props) {
  return (
      <a href="#" className="tile is-child box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.thumbnail} alt="thumbnail image"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p className="title">{props.title}</p>
              <p className="subtitle">
                <strong>{props.author}</strong> <small>{props.date}</small>
              </p>
            </div>
          </div>
        </article>
        <div className="content is-medium">
          {props.excerpt}
        </div>
      </a>

  );
}

export default SmallPost;
