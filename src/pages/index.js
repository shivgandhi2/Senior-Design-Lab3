import * as React from 'react'
import { Link } from 'gatsby'
///import { Link1 } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <h1>Senior Design Lab3</h1>
      <Link to="/about">About</Link>
      <p>Need to add links for each member with pictures.</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage