import React, { useContext } from 'react'
import { ThemeContext } from '../context/context'

const Home = () => {


    const context = useContext(ThemeContext)

    console.log(context);

    return (
        <div>
            this is home page
        </div>
    )
}

export default Home
