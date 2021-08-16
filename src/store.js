import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { logger } from "redux-logger";
import rootReducer from "./reducers";
const middlewares = [];

middlewares.push(thunk);
middlewares.push(promise);
middlewares.push(logger);

export default createStore(rootReducer, {}, applyMiddleware(...middlewares));
