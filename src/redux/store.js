import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import postsReducer from "./reducers/postsReducer";

const store = createStore(postsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;