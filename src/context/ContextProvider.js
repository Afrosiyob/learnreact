import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ContextProvider = ( { children } ) => {

    const [ isDark, setIsDark ] = useState( {
        transition: "all 0.2s linear",
        color: "white",
        backgroundColor: "rgb(33,33,33)"
    } )

    return (
        <ThemeContext.Provider value={ {
            isDark,
            setIsDark
        } } >
            { children }
        </ThemeContext.Provider>
    )
}

export default ContextProvider
