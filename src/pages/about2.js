import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage1 = () => {
  return (
    <main>
      <h1>Member 2</h1>
      <Link to="/">Back</Link>
      <p>Info about team member, will need to make 4 total.</p>
    </main>
  )
}

export const Head = () => <title>Member 2</title>

export default AboutPage1