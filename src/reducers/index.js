const initialState = {
    voteLeave: 0,
    voteRemain: 0,
    voteUndecided: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_LEAVE':
            return Object.assign({}, state, {
                voteLeave: state.voteLeave + 1
            })
        case 'VOTE_REMAIN':
            return Object.assign({}, state, {
                VoteRemain: state.Remain + 1
            })
        case 'VOTE_UNDECIDED':
            return Object.assign({}, state, {
                voteUndecided: state.voteUndecided + 1
            })
        default :
            return state
    }
}