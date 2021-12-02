import produceData from "../mockData/produce.json"
const LIKE = "produce/LIKE"

export const getAllProduce = (state) => Object.values(state.produce)

export const likeProduce = (id) => {
    return {
        type: LIKE,
        id
    }
}

const POPULATE = "produce/POPULATE"

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }

}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
      case POPULATE:
        const newState = {};
        action.produce.forEach(produce => {
          newState[produce.id] = produce;
        });
        return newState;
       case LIKE:
            return {...state, [action.id]: {
                ...state[action.id], liked: !state[action.id]?.liked
            }}
      default:
        return state;
    }
  }
