import { useContext } from 'react'
import { AppContext } from '../App'

const SidebarIcons = () => {
  const { socialLinks } = useContext(AppContext)
  return (
    <ul className="social-links">
      {socialLinks.map(({ id, url, icon }) => {
        return (
          <li className="social-link" key={id}>
            <a href={url}>{icon}</a>
          </li>
        )
      })}
    </ul>
  )
}
export default SidebarIcons
