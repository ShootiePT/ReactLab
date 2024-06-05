import { getCharacterList } from "../service/api.js";
import { loading } from "../view/pages/loading.js";
import { error } from "../view/pages/error.js";
import { characterList } from "../view/pages/character-list.js";
import { getParameters } from "../navigation.js";

export default async function () {
    loading();

    try {
        const data = await getCharacterList(getParameters());
        characterList(data);
    } catch (err) {
        error();
    }
}
