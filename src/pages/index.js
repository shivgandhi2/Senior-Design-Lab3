import * as React from 'react'
import { Link } from 'gatsby'


const IndexPage = () => {
  return (
    <main>
      <h1>Senior Design Lab3</h1>
      <Link to="/ryan">Ryan</Link>
      <p> </p>
      {/*<Link to="/about2">About 2</Link>*/}
      <Link to="/weston">Weston</Link>
      <p> </p>
      <Link to="/noah">Noah</Link>
      <p> </p>
      <Link to="/shiv">Shiv</Link>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage