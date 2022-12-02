import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import CommentBox from "../components/comments"

const headerStyle = {
  
  textAlign: 'center',
  textDecorationLine: 'underline',
  fontSize: '24'
};

const pictureSyle={
  textAlign: 'center'
};


const AboutPage1 = () => {
  return (

    

    <main>
      
      <h1 style={headerStyle}>Weston</h1>
      
       
      
      <p>My name is Weston Yohe and I am currently a senior student in the electrical engineering program 
        at the University of Iowa. My focus is on control systems. After high school, one of my jobs was working 
        in a manufacturing plant as a control room operator. This experience plus fixing/restoring an old motorcycle
         is what made me interested in pursuing a career in electrical engineering. When I am not busy with schoolwork,
          I like to play basketball and guitar. I also enjoy photography and going on hiking trips with friends. I added some pictures I have taken in the past.</p>
        
        <p style={pictureSyle}>
          <StaticImage
      src="../images/flower.jpg"
      
      aspectRatio = {2/1}
      alt="weston pics1"
      />
      </p>

      <p style={pictureSyle}>
<StaticImage
      src="../images/horse.JPG"
      
      aspectRatio = {4/3}
      alt="weston pics2"
      />
</p>

<p style={pictureSyle}>
<StaticImage
      src="../images/rocks2.png"
      aspectRatio = {16/9}
      alt="weston pics3"
      />
      </p>

      <p> </p>
    <Link to="/Return to home page">Back</Link>

    
    <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
        <CommentBox />
     </div>

    </main>
  )
}

export const Head = () => <title>Member 2</title>

export default AboutPage1