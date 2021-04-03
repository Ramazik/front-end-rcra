import produce from "immer";

export const gameListToRomReducer = produce((draft, action) => {

    switch (action.type) {

        case 'ADD_ROM': {
            draft.push(action.payload)
            return draft;
        }

        case 'REMOVE_ROM': {
            draft = draft.filter(r => r !== action.payload)
            return draft;

        }

        default: {
            return draft;
        }

    }


}, [])