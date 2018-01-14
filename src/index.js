import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import myApp from './reducers'
import { voteLeave, voteRemain, voteUndecided } from './actions'
import Results from './components/Results'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.store
    }

    handleVoteLeave = ()=>{
        this.store.dispatch(voteLeave())
    }

    handleVoteRemain = () => {
        this.store.dispatch(voteRemain())
    }

    handleVoteUndecided = () => {
        this.store.dispatch(voteUndecided())
    }

    render() {
        return (
            <div className="masthead">
            <div className="title">
                <h1>Second referendum?!</h1>
                <h4>Select your choice below</h4>
            </div>

            <div className="block">
                <div className="card vote">
                <p onClick={this.handleVoteLeave}>Vote Leave</p>
                </div>
                
                <div className="card vote">
                <p onClick={this.handleVoteRemain}>Vote Remain</p>
                </div>

                <div className="card vote middle">
                <p onClick={this.handleVoteUndecided}>Undecided</p>
                </div>
            </div>
           
            </div>

        )
    }
}


let store = createStore(myApp)

function render()
{   const render = document.getElementById('app')
     ReactDOM.render(
     <div>
        <App store={store} /> 
        <Results store={store} />
     </div>, render)
}
store.subscribe(render)

render()