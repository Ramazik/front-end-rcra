import {combineReducers} from "redux";
import {gameListReducer} from "./gameListReducer";

const reducer = combineReducers({
    gameList: gameListReducer,
});

export default reducer;
