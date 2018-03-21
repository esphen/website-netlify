import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './normalize.css'
import './skeleton.css'
import './styles.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <html lang="en" dir="ltr" />
      <title>Espen Henriksen</title>
      <link rel="icon" type="image/png" href="/img/favicon.png" />
      <meta
        name="description"
        content="The personal page of Espen Henriksen, a web developer based in Oslo, Norway"
      />
      {/* Twitter cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="/img/circle_profile.png" />
      <meta name="twitter:title" content="Home" />
      <meta name="twitter:site" content="@espen_dev" />
      <meta name="twitter:creator" content="@espen_dev" />
      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Espen Henriksen" />
      <meta
        property="og:description"
        content="A web developer based in Oslo, Norway"
      />
      <meta property="og:url" content="https://henriksen.is" />
      <meta property="og:image" content="/img/circle_profile.png" />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
