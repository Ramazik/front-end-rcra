import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
    }
}
const url = 'https://new.coolgirl.clusterrr.com/v1.0/'
export const fetchGamesFromApi = key => {


/*    return fetch(url + `roms/`, {
        method: 'GET',
        mode: "no-cors",
        ...config
    })*/
    return axios.get(`${url}roms/`, config)

}
