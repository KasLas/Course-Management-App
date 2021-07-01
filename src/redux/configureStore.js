import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; // This middleWare gives errors when changing state directly
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  // ADD SUPPORT FOR REDUX DEW TOOLS IN BROWSER EXTENSION
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
