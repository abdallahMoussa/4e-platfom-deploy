import { createContext, useState, useContext } from "react";


type ContextProbType = {
    showToolBox: boolean;
    setShowToolBox: (show: boolean) => void;
    setShowMyFavorite: (show: boolean) => void;
    showMyFavorite: boolean;
}
const contextProb: ContextProbType = {
    showToolBox: false,
    setShowToolBox: () => { },
    setShowMyFavorite: () => { },
    showMyFavorite: false,
}

export const ToolbarContext = createContext<ContextProbType>(contextProb)
export const useToolbar = () => useContext(ToolbarContext)

const ToolbarProvider = ({ children }) => {
    const [showToolBox, setShowToolBox] = useState(false)
    const [showMyFavorite, setShowMyFavorite] = useState(false)

    return (
        <ToolbarContext.Provider value={{showToolBox, setShowToolBox, showMyFavorite, setShowMyFavorite}}>
            {children}
        </ToolbarContext.Provider>
    )
}

export default ToolbarProvider
