
// const CART = "produce/CART"

const ADD = "produce/ADD"
const REMOVE = "produce/REMOVE"

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
        default:
            return state;
    }
}
