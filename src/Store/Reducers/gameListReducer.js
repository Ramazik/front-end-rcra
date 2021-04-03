import produce from "immer";

export const gameListReducer = produce((draft, action) => {
    switch (action.type) {
        case 'FETCH_ROMS_LIST': {
            draft.games=action.payload;
            return draft;
        }

        default: {
            return draft;
        }
    }
}, {games: []})