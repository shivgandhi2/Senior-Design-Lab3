import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Back to Home
            </Link>
          </li>
          <li className={navLinkItem}>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}
export default Layout