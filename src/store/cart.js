const ADD = "produce/ADD"
const DECREASE = "produce/DECREASE"
const REMOVE = "produce/REMOVE"
const RESET = "produce/RESET"

export const addProduce = (id) => {//action creator
    return {
        type: ADD,
        id
    }
}
export const removeProduce = (id) => {//action creator
    return {
        type: REMOVE,
        id
    }
}
export const decreaseProduce = (id) => {//action creator
    return {
        type: DECREASE,
        id
    }
}

export const resetProduce = () => {
    return {
        type: RESET
    }
}

export default function cartReducer(state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case ADD:
            if (!newState[action.id]) {
                newState[action.id] = { id: action.id, count: 1 }
            } else {
                newState[action.id].count++
            }
            return newState
        case REMOVE:
            if (newState[action.id]) {
                delete newState[action.id]
            }
            return newState
        case DECREASE:
            newState[action.id].count--
            if (newState[action.id].count === 0) {
                delete newState[action.id]
            }
            return newState
        case RESET:
            Object.keys(newState).forEach(key=> delete newState[key])
            return newState
        default:
            return state;
    }
}
