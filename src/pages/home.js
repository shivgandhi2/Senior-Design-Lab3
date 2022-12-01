import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
const HomePage = () => {
  return (
    <main>
      <Layout pageTitle="Team Members"></Layout>
      <p>
      UIowa College of <a href="https://engineering.uiowa.edu/">Engineering</a>
      </p>
      {/*<h1>Team Members</h1>*/}
      <Link to="/ryan">Ryan</Link>
      <p>
      Electrical Engineering
      </p>
      <p> </p>
      <Link to="/weston">Weston</Link>
      <p>Electrical Engineering</p>
      <p> </p>
      <Link to="/noah">Noah</Link>
      <p>Electrical Engineering</p>
      <p> </p>
      <Link to="/shiv">Shiv</Link>
      <p>
      Computer Science & Engineering
      </p>
      <p> </p>
      <StaticImage
      src="../images/Iowa Engineering.png"
      width={900}
      alt="Team Logo"
      />
      <p>
      <a href="https://ece.engineering.uiowa.edu/about/electrical-engineering-program">Electrical Engineering</a> <a href="https://ece.engineering.uiowa.edu/about/computer-science-and-engineering-program">Computer Science & Engineering</a>
      </p>
    </main>
  )
}

export const Head = () => <title>Member Page</title>

export default HomePage