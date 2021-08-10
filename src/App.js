import React, { Component } from 'react'

export class App extends Component {

  constructor ( props ) {
    super( props );

    this.state = {
      counter: 0
    }


    this.increment = () => this.setState( { counter: this.state.counter + 1 } )
    this.decrement = () => this.setState( { counter: this.state.counter - 1 } )

  }

  componentDidMount () {
    console.log( "component did mount" );
  }
  shouldComponentUpdate ( nextProps, nextState ) {
    // console.log( nextProps );
    console.log( nextState );
    console.log( "should component updated" );
    return true
  }

  componentDidCatch ( error, info ) {
    console.log( error );
    console.log( info );
    console.log( "component did catch" );
  }



  render () {
    return (
      <div>
        <button onClick={ this.increment }> increment </button>
        <button onClick={ this.decrement } > deccrement </button>
        Counter : { this.state.counter }
      </div>
    )
  }

  componentDidUpdate ( prevProps, prevState ) {
    // console.log( prevProps );
    console.log( prevState );
    console.log( "component did updated" );
  }
}

export default App
