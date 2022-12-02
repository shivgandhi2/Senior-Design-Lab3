import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import CommentBox from "../components/comments"

const photoStyle = {
  
  textAlign: 'center',
};

const HomePage = () => {
  return (
    <main>
    <p style = {photoStyle}>
      <Layout pageTitle="Meet Team Shock"></Layout>
      </p>
      <p>
      <a href="https://engineering.uiowa.edu/">UIowa College of Engineering</a>
      </p>
      <p>
      <a href="https://ece.engineering.uiowa.edu/about/electrical-engineering-program">Electrical Engineering</a> <a href="https://ece.engineering.uiowa.edu/about/computer-science-and-engineering-program">Computer Science & Engineering</a>
      </p>
      <p> </p>
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

      <p style = {photoStyle}> 
      <StaticImage
      src="../images/Iowa Engineering.png"
      width={900}
      alt="Team Logo"
      />
      </p>
      <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
        <CommentBox />
     </div>
    </main>
  )
}

export const Head = () => <title>Member Page</title>

export default HomePage