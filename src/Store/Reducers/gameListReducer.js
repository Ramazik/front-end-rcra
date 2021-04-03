import produce from "immer";

export const gameListReducer = produce((draft, action) => {
    switch (action.type) {
        case 'DEF': {
            return draft;
        }

        default: {
            return draft;
        }
    }
}, {games: []})