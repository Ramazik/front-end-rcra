import './App.css';
import {useEffect} from "react";
import {fetchGamesFromApi} from "./Services";
import {useDispatch} from "react-redux";


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchGamesFromApi()
            .then(r => {
                dispatch({
                    type: 'FETCH_ROMS_LIST',
                    payload: r.data.roms,
                })
            })
    }, [])

    return (
        <div className="App">
            Hello world
        </div>
    );
}

export default App;
