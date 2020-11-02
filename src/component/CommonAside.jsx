import React from 'react'
import {Link} from 'react-router-dom'
import SocialIcon from './SocialIcon'

export default function CommonAside() {
    return (
        <>
             <aside className='shadow'>
              <h2>free estimate</h2>
              <h4>(718) 723-3025</h4>
            </aside>
            <aside className='shadow'>
              <h2>find us on social media</h2>
             <SocialIcon/>
            </aside>
            <aside className='shadow'>
              <h2>tree service</h2>
              <ul>
                  <li><Link to="/">queens tree service</Link></li>
                  <li><Link to="/treeremoval">queens tree removal</Link></li>
                  <li><Link to="/treeservice">tree cutting</Link></li>
                  <li><Link to="/treeservice">tree prunning</Link></li>
                  <li><Link to="/treeservice">stump grinding</Link></li>
                  <li><Link to="/">commercial tree service queens</Link></li>
                  <li><Link to="/about">jr tree service blog</Link></li>
                  
                 
              </ul>
            </aside>
        </>
    )
}
