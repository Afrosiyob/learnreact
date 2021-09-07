import axios from "axios"

export const apiService = async ( { queryKey } ) => {
    const [ key, params ] = queryKey

    console.log( params );

    switch ( key ) {
        case 'GET_POSTS':
            return await axios.get( "https://jsonplaceholder.typicode.com/posts" )
                .then( response => response )
                .catch( error => error )
        case 'GET_COMMENTS':
            return await axios.get( "https://jsonplaceholder.typicode.com/comments" )
                .then( response => response )
                .catch( error => error )
        default:
            return "Default data..."
    }

}