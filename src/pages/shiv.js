import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage3 = () => {
  return (
    <main>
      <h1>Shiv</h1>
      <Link to="/home">Back</Link>
      <p>ABOUT</p>
      <p>Hi, my name is Shiv Gandhi and I am a fourth year Computer Science & Engineering (CSE) student at UIowa. 
        I am from Des Plaines, Illinois (about 10 minutes from O'Hare Airport) and graduated from Elk Grove High School
        in 2019. During my high school years, I played basketball for a couple years and participated in Robotics. During
        my free time, I like to play basketball or simply go outside and see nature.</p>

        <StaticImage
    src="../images/shivbball.png"
    width = {500}
    alt = "High School Basketball Days" 
    />

<p>CSE</p>
      <p>As a CSE student, I am interacting with computers and technology daily, which I don't mind.
        What got me into Engineering and specifically the CS aspect was my father, who is an electrcial engineer.
        I was interested in his job and decided that I wanted to dive deeper into the major, but mostly focused on the software.
        I was originally a Computer Science major, but decided to switch to Engineering in order ot get the best of both
        worlds of Engineering. 
      </p>

      <StaticImage
    src="../images/shivwater.png"
    width = {500}
    alt = "Picture of a Lake in Galena, Illinois" 
    />

<p>FUTURE</p>
      <p>While I am not entirely sure of what my future holds, I have a good idea.
        The Computer Science and Engineering fields are very broad, so it is difficult to 
        be general when lookign for a career. The aspect of CSE that I find the most appealing is Cyber Security,
        which I hope to find a career in when graduating. I did an internship over the Summer in Cook County for Cyber Security
        and enjoyed gaining a greater understanding and skillset in it.
      </p>

      <StaticImage
    src="../images/shivcs.png"
    width = {500}
    alt = "Cyber Security" 
    />
    </main>
  )
}

export const Head = () => <title>Member 1</title>

export default AboutPage3