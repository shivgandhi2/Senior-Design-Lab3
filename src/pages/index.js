import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"

{/*}
export default function IndexPage()
{
  return <div>
    <h1>Team Shock</h1>
    <p>Team 11</p>
    <Link to="/home">Meet The Members</Link>
    <StaticImage
    src='../images/Team Shock Logo.png'
    alt="Team Logo"
    />
    </div>
}
*/}
//import Layout from '../components/layout'

const IndexPage = () => (
    <main>
      <h1>Team Shock</h1>
       <p>Team 11</p>
      <Link to="/home">Meet The Members</Link>
      <StaticImage
      src="../images/Team Shock Logo.PNG"
      width={900}
      alt="Team Logo"
      />
    </main>
  )


//export function Logo() {
//  return <StaticImage src="../images/Team Shock Logo.PNG" alt="Team Logo" />
//}

export const Head = () => <title>Home Page</title>

export default IndexPage
