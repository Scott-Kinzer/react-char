
let InitialState = {
    color: true
}

export const colorReducer = (state = InitialState, action ) => {
    switch(action.type) {
        case "CHANGE_COLOR":
            return {
                ...state,
                    color: !state.color,
            }
        default: 
            return {
                ...state
            }
            
    }
}

