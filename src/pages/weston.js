import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage1 = () => {
  return (
    <main>
      <h1>Weston</h1>
      <Link to="/">Back</Link>
      <p>Weston's page. TEST TEST TEST</p>
      <Link to="/home">Back</Link>
      <p>Weston's page.</p>
    </main>
  )
}

export const Head = () => <title>Member 2</title>

export default AboutPage1