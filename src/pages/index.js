import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
//import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <main>
      <h1>Team Shock</h1>
       <p>Team 11</p>
      <Link to="/home">Meet The Members</Link>
      <StaticImage
        alt="Team logo"
        src="../image/Team Shock Logo.PNG"
      />
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage