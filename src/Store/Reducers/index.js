import {combineReducers} from "redux";
import {gameListReducer} from "./gameListReducer";
import {gameListToRomReducer} from "./gameListToRomReducer";

const reducer = combineReducers({
    gameList: gameListReducer,
    gamesToRom: gameListToRomReducer,
});

export default reducer;
