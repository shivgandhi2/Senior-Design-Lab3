import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <h1>Ryan</h1>
      <Link to="/home">Back</Link>
      <p>Ryan's page. test tese</p>
    </main>
  )
}

export const Head = () => <title>Member 1</title>

export default AboutPage