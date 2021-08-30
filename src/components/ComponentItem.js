import React, { useEffect, useState } from 'react'

const ComponentItem = ({ getCount }) => {

    const [array, setArray] = useState([])

    useEffect(() => {
        console.log("child component");
        const count = getCount()
        for (let index = 0; index < count; index++) {
            array.push(count)
        }

    }, [getCount, array])

    return (
        <ul>
            {
                array && array.map((_, index) => (
                    <li key={index}> {_}  </li>
                ))
            }
        </ul>
    )
}

export default ComponentItem
