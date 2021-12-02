import produceData from "../mockData/produce.json"

export const getAllProduce = (state) => Object.values(state.produce)

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
      default:
        return state;
    }
  }
