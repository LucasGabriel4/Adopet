import React, { useContext, useEffect } from "react"


interface IContext {
    logado: boolean,
    setLogado: React.Dispatch<React.SetStateAction<boolean>>
}
const Context = React.createContext<IContext | null>(null)


export const useContextStorage = () => {
    const context = useContext(Context)
    return context as IContext
}


export const ContextProvider = ({children}: React.PropsWithChildren) => {
    const Token = localStorage.getItem('Token')
    const [logado, setLogado] = React.useState(Token ? true : false)
   
    return(
        <Context.Provider value={{logado, setLogado}}>
            {children}
        </Context.Provider>
    )
}