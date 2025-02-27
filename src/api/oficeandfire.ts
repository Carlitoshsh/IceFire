import { ApiDefinition } from "../models/ApiDefinition"

const API_URL = 'https://anapioficeandfire.com'

async function getHouses() {
    return await callApi(`${API_URL}/api/houses`)
}

async function getCharacterByUrl(url: string) {
    return await callApi(url)
}

async function callApi(route: string) {
    const request = await fetch(route)
    return await request.json()
}


const api: ApiDefinition = {
    getHouses,
    getCharacterByUrl
}

export default api;