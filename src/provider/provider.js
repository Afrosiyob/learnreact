import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'

import { ThemeContext } from "../context/context"

export const ThemeProvider = ( { children } ) => {

    const { Provider } = ThemeContext;

    const [ isDark, setIsDark ] = useState( {
        transition: "all 0.2s linear",
        color: "white",
        backgroundColor: "rgb(33,33,33)"
    } )

    return (
        <Provider value={ {
            isDark,
            setIsDark
        } }>
            { children }
        </Provider>
    )
}

export const QueryProvider = ( { children } ) => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={ queryClient }>
            { children }
            <ReactQueryDevtools initialIsOpen={ false } />
        </QueryClientProvider>
    )
}