import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import myApp from './reducers'

let store = createStore(myApp)

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="masthead">
                    <p>Hello</p>
            </div>
        )
    }
}

function render()
{   const render = document.getElementById('app')
     ReactDOM.render(<App />, render)
}
store.subscribe(render)

render()