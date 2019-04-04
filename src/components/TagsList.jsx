import React from 'react';
import { Link } from "react-router-dom";

export default ({tags})=> (
    <div>
        {tags.map(tag=><Link key={tag} to={`/tag/${tag}`}><button>{tag}</button></Link>)}
    </div>

)

