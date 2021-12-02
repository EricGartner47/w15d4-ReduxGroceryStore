
// const CART = "produce/CART"

const ADD = "produce/ADD"

export const addProduce = (id) => {//action creator
    return {
        type: ADD,
        id
    }
}


export default function cartReducer(state={}, action) {
    switch(action.type){
        case ADD:
            const newState ={...state};
            if (!newState[action.id]){
                newState[action.id] = {id:action.id, count:1}
            } else {
                newState[action.id].count++
            }
            return newState
        default:
            return state;
    }
}
