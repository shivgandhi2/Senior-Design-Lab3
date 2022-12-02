import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import CommentBox from "../components/comments"

const AboutPage2 = () => {
  return (
    <main>
      <h1 style={{color: "blue"}}>Noah</h1>

      <p>ABOUT</p>
      <p>Hello, I am an electrical engineering student at UIowa with a focus on computer technology and embedded systems.
        I am originally from Plainfield, Illinois. In my spare time I like to play chess and play video games.
        I enjoy working on broken laptops/computers as a hobby and sometimes can make some money through this.
        In the past I used to make music and even produced an album on spotify and apple music.
      </p>

      <StaticImage
    src="../images/noah-portrait.jpg"
    width = {500}
    alt = "Portrait from florida" 
    />

      <p>ECE</p>
      <p>As an electrical computer engineer, I enjoy the design and maintanence of computers. When I was younger
        I used to create small circuits and this is what initially got me interested in electrical engineering.
      </p>

      <StaticImage
    src="../images/noah-computer.png"
    width = {500}
    alt = "computer picture" 
    />

      <p>FUTURE</p>
      <p>In the future, I want to get a job working with embedded systems. My focus area in school revolved around computer engineering, and embedded systems is a strong
        interest of mine. I enjoy the layout of computers and utilizing microcontrollers is a strong interest of mine. I dont think I could see myself being anything but 
        an engineer, but working as an IT technician would also be an interesting job. I would like to 
      </p>

      <StaticImage
    src="../images/noah-micro.jpg"
    width = {500}
    alt = "microcontroller picture" 
    />  

    <p> </p>
    <Link to="/home">Back</Link>

    
    <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
        <CommentBox />
     </div>

    </main>

  )
}

export const Head = () => <title>Member 1</title>

export default AboutPage2