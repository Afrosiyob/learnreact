import { useState } from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { ThemeContext } from '../context/context'
import { store } from '../redux/store/store'



export const QueryProvider = ({ children }) => {
    // Create a client
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export const ThemeProvider = ({ children }) => {

    const [themeColor, changeThemeColor] = useState("red")
    const [textColor, changeTextColor] = useState("white")

    return (
        <ThemeContext.Provider value={{
            themeColor,
            changeThemeColor,
            textColor,
            changeTextColor
        }}>
            {children}
        </ThemeContext.Provider>
    )

}


export const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}

