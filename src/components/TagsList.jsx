import React from "react";
import { Link } from "react-router-dom";

export default ({ tags }) => (
  <div>
    {tags.map(tag => (
      <code key={tag}>
        <a href={`/tags/${tag}`}>{tag}</a>
      </code>
    ))}
  </div>
);
