import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
// Create a client
const queryClient = new QueryClient()


export const Query = ( { children } ) => {

    return (
        <QueryClientProvider client={ queryClient }>
            { children }
            <ReactQueryDevtools initialIsOpen={ false } />
        </QueryClientProvider>
    )
}