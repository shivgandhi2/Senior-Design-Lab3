import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage2 = () => {
  return (
    <main>
      <h1>Noah</h1>
      <Link to="/home">Back</Link>
      <p>Noah's page</p>
      <p>Hello, I am an electrical engineering student at UIowa with a focus on computer technology and embedded systems.
        I am originally from Plainfield, Illinois. In my spare time I like to play chess and hangout with friends.
      </p>
    </main>
  )
}

export const Head = () => <title>Member 1</title>

export default AboutPage2
