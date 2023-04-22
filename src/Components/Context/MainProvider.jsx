import { useState } from "react"
import { MainContext } from "./MainContext"


const MainProvider = ({ children }) => {
    const [randomUsers, setRandomUsers] = useState()

    return (
        <>
            <MainContext.Provider value={{ randomUsers, setRandomUsers }}>
                { children }
            </MainContext.Provider>
        </>
    )
}

export default MainProvider