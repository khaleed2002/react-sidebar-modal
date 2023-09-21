import { useState } from "react"

const useToggle = (defaultValue) => {
    const [toggleVal, setToggle] = useState(defaultValue)
    const Toggle = () => setToggle((toggleVal) => !toggleVal)
    return {toggleVal, Toggle}
}
export default useToggle