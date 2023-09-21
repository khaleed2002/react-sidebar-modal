import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './components/Sidebar'
import { links, social } from './data'
import { createContext, useState } from 'react'
import useToggle from './custom hook/useToggle'
import Modal from './components/Modal'
export const AppContext = createContext()
const App = () => {
  const { toggleVal, Toggle } = useToggle(false)
  const { toggleVal: modalVal, Toggle: ToggleModal } = useToggle(false)
  const [sidebarLinks, setLinks] = useState(links)
  const [socialLinks, setSocialLinks] = useState(social)
  return (
    <AppContext.Provider
      value={{ sidebarLinks, socialLinks, toggleVal, Toggle }}
    >
      <main>
        <button onClick={Toggle}>
          <AiOutlineMenu className="sidebar-icon" />
        </button>
        <Sidebar />
        <button className="modal-btn" onClick={ToggleModal}>
          show modal
        </button>
        <Modal modalVal={modalVal} ToggleModal={ToggleModal} />
      </main>
    </AppContext.Provider>
  )
}
export default App
