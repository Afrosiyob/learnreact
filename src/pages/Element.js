import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';
import { fetchInfo } from '../api/query.service';

const Element = () => {



    let { state, pathname } = useLocation()

    const [elData, setelData] = useState([])

    console.log(state);
    console.log(pathname);


    const { isLoading, error, data } = useQuery(["info", { url: `https://jsonplaceholder.typicode.com${pathname}` }], fetchInfo, {
        onSuccess: () => {
            console.log("fetching info");
        }
    })

    useEffect(() => {
        setelData(data?.data)
    }, [data])


    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div>
            {elData?.body}
        </div>
    )
}

export default Element
