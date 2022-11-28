import * as React from 'react'
import { Link } from 'gatsby'


const IndexPage = () => {
  return (
    <main>
      <h1>Senior Design Lab3</h1>
      <Link to="/about">About</Link>
      <p>Need to add links for each member with pictures.</p>
      {/*<Link to="/about2">About 2</Link>*/}
      <Link to="/about2">About</Link>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage