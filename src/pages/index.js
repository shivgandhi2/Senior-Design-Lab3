import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import CommentBox from "../components/comments"

const headerStyle = {
  
  textAlign: 'center',
  textDecorationLine: 'underline overline',
  fontSize: '40',
  backgroundColor: 'yellow'
};



const pictureSyle={
  textAlign: 'center'
};


const IndexPage = () => (
    <main>
      <h1 style={headerStyle}>Team Shock</h1>
       <p>Team 11</p>
       <Link to="/home">Meet The Members</Link>
       <p style={pictureSyle}>
          <StaticImage
      src="../images/Team Shock Logo No Background.PNG"
      width={900}
      alt="Team Logo"
      />
      </p>
      
      
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
