import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import CommentBox from "../components/comments"
//const commentBox = require('commentbox.io');

//commentBox('my-project-id');
//commentBox('my-5643242062217216-proj');




const IndexPage = () => (
    <main>
      <h1>Team Shock</h1>
       <p>Team 11</p>
      <Link to="/home">Meet The Members</Link>
      <StaticImage
      src="../images/Team Shock Logo No Background.PNG"
      width={900}
      alt="Team Logo"
      />
      
      <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
     {/* {commentBox('5730512475783168-proj')} */}
{/* <div className="commentbox"></div> */}
{/* <CommentBox /> */}
{/* <div className="commentbox" /> */}
<CommentBox />
     </div>
    </main>
  )

//export function Logo() {
//  return <StaticImage src="../images/Team Shock Logo.PNG" alt="Team Logo" />
//}


export const Head = () => <title>Home Page</title>



export default IndexPage
