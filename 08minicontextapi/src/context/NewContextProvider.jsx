import NewContext from "./NewContext"
import { useState } from "react"
 
const NewContextProvider = ({children})=>{
    const [New,setNew] = useState(null)
    return (
        <NewContext.Provider value={{New,setNew}}>
            {children}
        </NewContext.Provider>
    )
}

export default NewContextProvider