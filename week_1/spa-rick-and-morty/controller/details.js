import { getCharacter } from "../service/api.js";
import { loading } from "../view/pages/loading.js";
import { error } from "../view/pages/error.js";
import { characterDetails } from "../view/pages/character-details.js";
import { getPath } from "../navigation.js";

export default async function init() {
    loading();

    try {
        const data = await getCharacter(getPath());
        characterDetails(data);
    } catch (err) {
        error();
    }
}
