const initialState = {
    voteLeave: 0,
    voteRemain: 0,
    voteUndecided: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_LEAVE':
        console.log("Leave")
            return Object.assign({}, state, {
                voteLeave: state.voteLeave + 1
            })
        case 'VOTE_REMAIN':
        console.log("Remain")
            return Object.assign({}, state, {
                voteRemain: state.voteRemain + 1
            })
        case 'VOTE_UNDECIDED':
        console.log("Undecided")
            return Object.assign({}, state, {
                voteUndecided: state.voteUndecided + 1
            })
        default :
            return state
    }
}