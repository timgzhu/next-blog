import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  const now = new Date()

  return (
    <footer className="center mw6 f6 tc mt4">
      <p>
        <span>&copy; </span>
        <span>{now.getFullYear()} </span>
        <span>{props.copyright} </span>
        {props.icp && (<span><a href="https://beian.miit.gov.cn/" target="_blank">{props.icp}</a></span>) }
      </p>
    </footer>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
}

export default Footer
