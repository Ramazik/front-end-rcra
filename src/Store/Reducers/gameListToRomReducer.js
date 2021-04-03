import produce from "immer";

export const gameListToRomReducer = produce((draft, action) => {

    switch (action.type) {

        case 'ADD_ROM': {
            draft.push(action.payload)
            return draft;
        }

        case 'REMOVE_ROM': {
            draft = draft.filter(r => r.rom_id !== action.payload.rom_id)
            return draft;

        }

        default: {
            return draft;
        }

    }


}, [])