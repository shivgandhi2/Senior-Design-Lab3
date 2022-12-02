import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import CommentBox from "../components/comments"

const photoStyle = {
  
  textAlign: 'center',
};

const headerStyle = {
  
  textAlign: 'center',
  textDecorationLine: 'underline',
  fontSize: '40',
  backgroundColor: 'yellow'
};


const HomePage = () => {
  return (
    <main>
      <h1 style={headerStyle}>Team Shock</h1>
      <p style = {photoStyle}>
      <Link to="/">Back to Home Page</Link>
      </p>
      <p>
      <a href="https://engineering.uiowa.edu/">UIowa College of Engineering</a>
      </p>
      <p>
      <a href="https://ece.engineering.uiowa.edu/about/electrical-engineering-program">Electrical Engineering</a> <a href="https://ece.engineering.uiowa.edu/about/computer-science-and-engineering-program">Computer Science & Engineering</a>
      </p>
      <p> </p>
      <p style = {photoStyle}>
      <Link to="/ryan">Ryan</Link>
      </p>
      <p style = {photoStyle}>
      Electrical Engineering ⬤ rrappold@uiowa.edu 
      </p>
      <p> </p>
      <Link to="/weston">Weston</Link>
      <p>Electrical Engineering ⬤ westonyohe@uiowa.edu</p>
      <p> </p>
      <Link to="/noah">Noah</Link>
      <p>Electrical Engineering ⬤ nabushanab@uiowa.edu</p>
      <p> </p>
      <Link to="/shiv">Shiv</Link>
      <p>
      Computer Science & Engineering ⬤ shivgandhi@uiowa.edu
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