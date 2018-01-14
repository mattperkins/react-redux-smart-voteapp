import React from 'react'

class Results extends React.Component {
constructor(props) {
super(props)
    this.store = this.props.store
}

voteLeaveInPercent() {
    if(this.store.getState().voteLeave) {
        return ( this.store.getState().voteLeave / ( this.store.getState().voteLeave + this.store.getState().voteRemain + this.store.getState().voteUndecided ) ) * 100
    } else {
        return 0
    }
}

voteRemainInPercent() {
    if(this.store.getState().voteRemain) {
        return ( this.store.getState().voteRemain / ( this.store.getState().voteRemain + this.store.getState().voteUndecided + this.store.getState().voteLeave ) ) * 100
    } else {
        return 0
    }
}

voteUndecidedInPercent() {
    if(this.store.getState().voteUndecided) {
        return ( this.store.getState().voteUndecided / ( this.store.getState().voteUndecided + this.store.getState().voteLeave + this.store.getState().voteRemain ) ) * 100
    } else {
        return 0
    }
}

voteLeaveStyle(){
    return {
        width: this.voteLeaveInPercent()+'%'
    }
}

voteRemainStyle(){
    return {
        width: this.voteRemainInPercent()+'%'
    }
}

voteUndecidedStyle(){
    return {
        width: this.voteUndecidedInPercent()+'%'
    }
}

render() {

return (
    <div className="block">
        
        <div className="card">
            <span>{ this.voteLeaveInPercent().toFixed(2) + '%' }</span>
                <div className="progress active">
                    <div className="progress-bar progress-bar-success" style={this.voteLeaveStyle()}>
                    </div>
                </div>
        </div>

        <div className="card">
            <span>{ this.voteRemainInPercent().toFixed(2) + '%' }</span>
                <div className="progress active">
                    <div className="progress-bar progress-bar-danger" style={this.voteRemainStyle()}>
                    </div>
                </div>
        </div>

        <div className="card">
            <span>{ this.voteUndecidedInPercent().toFixed(2) + '%' }</span>
                <div className="progress active">
                    <div className="progress-bar progress-bar-warning" style={this.voteUndecidedStyle()}>
                    </div>
                </div>
        </div>

    </div>
)
}
}
export default Results