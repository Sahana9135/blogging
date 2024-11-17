import React from 'react';
import './Alt.css';
import { Link } from 'react-router-dom';

function Alt() {
  return (
    <>
        <div className='alter'>
            <h1>
                Blog
            </h1>

            <ul>
                <li><Link to="/">Back</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Alt;