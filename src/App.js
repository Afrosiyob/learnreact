import React, { useEffect, useState } from 'react'

const App = () => {

  const [state, setState] = useState({
    loading: true
  })

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        loading: false
      }))
    }, 2000);
  })

  return (
    <div>
      {state.loading && "loading"}
    </div>
  )
}

export default App
