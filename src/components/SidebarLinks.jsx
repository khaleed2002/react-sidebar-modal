import { useContext, useEffect } from 'react'
import { AppContext } from '../App'
const SidebarLinks = () => {
  const { sidebarLinks } = useContext(AppContext)

  return (
    <ul className="sidebar-container">
      {sidebarLinks.map(({ id, url, text, icon }) => {
        return (
          <li className="sidebar-link" key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SidebarLinks
