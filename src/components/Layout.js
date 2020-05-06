import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import NewsletterForm from './NewsletterForm'

export default function Layout({ location, title, children, wide }) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.2),
          marginBottom: rhythm(1.2),
          marginTop: 0,
          textAlign: `center`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(wide ? 48 : 28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {header}
      {children}
      <NewsletterForm />
    </div>
  )
}
