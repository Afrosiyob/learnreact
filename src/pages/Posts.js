import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useRouteMatch } from 'react-router-dom'
import { fetchList } from '../api/query.service'

const Posts = () => {

    const [posts, setPosts] = useState([])
    let { url } = useRouteMatch();

    const { isLoading, error, data } = useQuery(["posts", { url: "https://jsonplaceholder.typicode.com/posts" }], fetchList, {
        onSuccess: async () => {
            console.log("success fetched");
        }
    })

    useEffect(() => {
        setPosts(data?.data)
    }, [data])

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <ul>
                {posts && posts?.map((el, index) => (
                    <li key={index}>
                        <Link
                            to={{
                                pathname: `${url}/${el?.id}`,
                                state: { elData: el }
                            }}
                        > {el?.title} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts
