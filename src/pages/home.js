import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
const HomePage = () => {
  return (
    <main>
      <Layout pageTitle="Team Members"></Layout>
      {/*<h1>Team Members</h1>*/}
      <Link to="/ryan">Ryan</Link>
      <p>Electrical Engineering

      </p>
      <p> </p>
      <Link to="/weston">Weston</Link>
      <p>Electrical Engineering

      </p>
      <p> </p>
      <Link to="/noah">Noah</Link>
      <p>Electrical Engineering

      </p>
      <p> </p>
      <Link to="/shiv">Shiv</Link>
      <p>Computer Science & Engineering
        
      </p>
      <p> </p>
      {/*<Link to="/">Back</Link>
      <p>Back to Home Page.</p>*/}
    </main>
  )
}

export const Head = () => <title>Member Page</title>

export default HomePage