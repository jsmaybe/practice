import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Practice</h2>
    <ul>
      <li><Link to="/user">User</Link></li>
    </ul>
  </div>
);

export default Home
