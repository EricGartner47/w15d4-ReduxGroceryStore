import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import produceReducer from "./produce";
import cartReducer from "./cart";
import { useSelector } from "react-redux";

const rootReducer = combineReducers({
  produce: produceReducer,
  cart: cartReducer
});

const items = useSelector(state => state.produce)

let enhancer;

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

export default configureStore;
