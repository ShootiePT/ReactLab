const API_URL = "https://rickandmortyapi.com/api";

const get = async function (url) {
    const data = await fetch(url);
    return await data.json();
};

async function getCharacterList(params = "") {
    const { info, results } = await get(`${API_URL}/character?${params}`);
    const pagination = { next: info.next, previous: info.prev };
    return { pagination, characters: results };
}

function getCharacter(id) {
    try {
        return get(`${API_URL}/character/${id}`);
    } catch ({ responseJSON }) {
        throw Error(responseJSON.error);
    }
}

export { getCharacterList, getCharacter };
