import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'

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