import React from 'react'
import Link from 'gatsby-link'
import Icon from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/fontawesome-free-solid'
import { faTwitterSquare, faGithubSquare } from '@fortawesome/fontawesome-free-brands'

import './styles.css'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: skills } = data.allMarkdownRemark

    return (
      <section className="grid">
        <div className="grid__splash">
          <img src="/img/splash.jpg" />
        </div>
        <main className="grid__main profile">
          <img
            src="/img/circle_profile.png"
            alt="A fancy looking image of a fancy looking developer. Hint: It's me"
            className="profile__image"
          />
          <h1>Espen Henriksen</h1>
          <p>
            <i>Web developer</i> and Linux enthusiast, this guy loves everything from
            Open Source to Instragram dog pics.
          </p>
          <h2>What I do</h2>
          <ul className="what-i-do">
            {skills.map(({ node: skill }) => (
              <li key={skill.id} className="what-i-do__activity">
                <Link to={skill.fields.slug}>{skill.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </main>
        <div className="grid__links links">
          <div className="links__link">
            <a href="mailto:espen+portfolio@henriksen.is">
              <Icon icon={faEnvelopeSquare} size="3x" />
            </a>
          </div>
          <div className="links__link">
            <a href="https://twitter.com/espen_dev">
              <Icon icon={faTwitterSquare} size="3x" />
            </a>
          </div>
          <div className="links__link">
            <a href="https://github.com/esphen">
              <Icon icon={faGithubSquare} size="3x" />
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "skill" }}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
