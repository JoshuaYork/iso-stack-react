import React from "react";
import { Link } from "react-router-dom";

export default ({ tags }) => (
  <div>
    {tags.map(tag => (
      <Link className='tag' key={tag} to={`/tags/${tag}`}>
        {tag}
      </Link>
    ))}
  </div>
);
