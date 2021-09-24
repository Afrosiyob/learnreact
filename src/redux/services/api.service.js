import axios from "axios";

export const fetchGetPost = async () =>
    await axios
        .get( "https://jsonplaceholder.typicode.com/posts" )
        .then( response => ( { response } ) )
        .catch( error => ( { error } ) )