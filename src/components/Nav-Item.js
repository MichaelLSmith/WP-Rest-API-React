import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <Link
        key={item.id}
        to={`/${item.object_slug}`}
        style={{marginRight: '10px'}}
      >
        {item.title}
    </Link>   
  )
}
