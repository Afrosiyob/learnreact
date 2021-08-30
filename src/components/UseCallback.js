import React from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ComponentItem from './ComponentItem'



const UseCallback = () => {

    const [color, setColor] = useState(true)
    const [count, setCount] = useState(1)

    const changeCount = useCallback(() => {
        return count
    }, [count])

    useEffect(() => {
        console.log("component mounted");
    })

    return (
        <div>
            <h1 style={{ color: color ? "red" : "blue" }}> text color {count}  </h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> count + </button>
            <button onClick={() => setColor(prevColor => !prevColor)} > change color + </button>

            <ComponentItem getCount={changeCount} />
        </div>
    )
}

export default UseCallback
