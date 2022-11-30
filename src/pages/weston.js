import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage1 = () => {
  return (
    <main>
      <h1>Weston</h1>
      <Link to="/home">Back</Link>
      <p>My name is Weston Yohe and I am currently a senior student in the electrical engineering program 
        at the University of Iowa. My focus is on control systems. After high school, one of my jobs was working 
        in a manufacturing plant as a control room operator. This experience plus fixing/restoring an old motorcycle
         is what made me interested in pursuing a career in electrical engineering. When I am not busy with schoolwork,
          I like to play basketball and guitar.</p>
    </main>
  )
}

export const Head = () => <title>Member 2</title>

export default AboutPage1