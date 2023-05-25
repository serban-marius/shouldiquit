import React from 'react'

interface IFooter {}

const Footer = (props: IFooter) => {
  return (
    <>
      <ul className="footer-list">
        <li>
          Source:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/serban-marius/shouldiquit"
          >
            Github
          </a>
        </li>
      </ul>
    </>
  )
}

export default Footer
