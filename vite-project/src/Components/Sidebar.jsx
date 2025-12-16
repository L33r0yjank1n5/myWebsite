import { GitHubSVG } from "../SVGs/GitHubSVG.jsx"
import { IndeedSVG } from "../SVGs/IndeedSVG.jsx"

export const Sidebar = () => {
  return (
    <div>
      <h1>Adam Smestad</h1>
      <h2>Front End Developer</h2>
      <div>I build accessible, responsive digital experiences for the web.</div>
      <div>
        <li>
          <ul><a href='#aboutme' aria-label='About Me'>About Me</a></ul>
          <ul><a href='#experience' aria-label='Experience'>Experience</a></ul>
        </li>
      </div>
      <div>
        <a href='' aria-label='GitHub'>
          <GitHubSVG/>
        </a>
        <a href='' aria-label='Indeed'>
          <IndeedSVG/>
        </a>
      </div>
    </div>
  )
}