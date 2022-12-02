import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import CommentBox from "../components/comments"

const AboutPage = () => {
  return (
    <main>
     
     <h1 style={{color: "blue"}}>Ryan</h1>
      
      <p>ABOUT</p>
      <p>Hi, my name is Ryan Rappold and I am a Senior Electrical Engineering 
        student at the University of Iowa. I graduated from Marist High School in 
        Chicago Illinois where I played football, basketball, and volleyball. I like to spend my free 
        time playing sports but if I am feeling lazy, I enjoy playing the guitar, which is where 
        I became interested with the idea of electricity.</p>

        <StaticImage
    src="../images/Ryan Pic 1.png"
    width = {500}
    alt = "Football" 
    />

      <p>ELECTRICAL ENGINEERING</p>
      <p>I started playing the guitar when I was about 15 and as I progressed, I became more and
         more interested on how a few nickel strings attached to a big piece of wood sounded so big when
          it was plugged into an amplifier. About a year later I opened the back of the guitar where all
           the parts were, and this forced me to learn about electronics. I learned about potentiometers,
            pickups, a switch select, and an output jack. Once I learned about the basics, I decided to swap
             pickups on my guitar where I learned how to solder, which was very fun. I have been replacing
              and rearranging all the guts in my guitars ever since. This hobby sparked my interest in electricity,
               and I decided to learn as much as I can about the topic.</p>

               <StaticImage
    src="../images/SLASHPIC.jpg"
    width = {400}
    alt = "Guitar" 
    />

      <p>FUTURE PLANS</p>
      <p>Over the Summer of 2022, I worked for a company called Environmental Systems Design. They are
         an MEP engineering company based out of the Sears Tower in Chicago Illinois. The company works
          with many large businesses that are creating new buildings and arranges the layout of the mechanical
           and electrical equipment, as well as the pluming and fire alarm systems. I had a great time that
            summer and look forward to working with them again upon graduation in 2023. </p>
            <p> </p>

     <StaticImage
    src="../images/SearsTower.jpg"
    width = {450}
    alt = "Willis" 
    />
 <p> </p>
 <Link to="/home">Back to Team Members</Link>

 <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
        <CommentBox />
     </div>
    </main>
  )
}

export const Head = () => <title>Member 1</title>

export default AboutPage