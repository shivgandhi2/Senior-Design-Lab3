import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import CommentBox from "../components/comments"

const headerStyle = {
  
  textAlign: 'center',
  textDecorationLine: 'underline',
  fontSize: '40',
  backgroundColor: 'yellow'
};



const pictureSyle={
  textAlign: 'center'
};


const IndexPage = () => (
    <main>
      <h1 style={headerStyle}>Team Shock</h1>
      <p style = {photoStyle}>
      <p>Team 11</p>
      </p>
      <p style = {photoStyle}>
      <Link to="/home">Meet The Members</Link>
      </p>
       
       <p style={pictureSyle}>
          <StaticImage
      src="../images/Team Shock Logo No Background.PNG"
      width={900}
      alt="Team Logo"
      />
      </p>
      <a href="https://github.com/shivgandhi2/Senior-Design-Lab3">Link to GitHub Repository</a>
      <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
<CommentBox />
     </div>
    </main>
  )

//export function Logo() {
//  return <StaticImage src="../images/Team Shock Logo.PNG" alt="Team Logo" />
//}


export const Head = () => <title>Home Page</title>



export default IndexPage
