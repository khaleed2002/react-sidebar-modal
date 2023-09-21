import logo from '../logo.svg'
import { AiOutlineClose } from 'react-icons/ai'
import SidebarLinks from './SidebarLinks'
import SidebarIcons from './SidebarIcons'
import { useContext } from 'react'
import { AppContext } from '../App'

const Sidebar = () => {
  const {toggleVal, Toggle} = useContext(AppContext)
  return (
    <aside className={toggleVal ? 'show-sidebar' : ''}>
      <div className="header">
        <img src={logo} alt="logo" />
        <button onClick={Toggle}>
          <AiOutlineClose className="sidebar-close" />
        </button>
      </div>
      <SidebarLinks />
      <SidebarIcons />
    </aside>
  )
}
export default Sidebar
