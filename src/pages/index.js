import * as React from 'react'
import { Link } from 'gatsby'
//import Layout from '../components/layout'
const HomePage = () => {
  return (
    <main>
      <h1>Team Shock</h1>
       <p>Team 11</p>
      <Link to="/index">Meet The Members</Link>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default HomePage