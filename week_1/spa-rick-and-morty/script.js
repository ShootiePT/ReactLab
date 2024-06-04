import * as routes from './routes.js';
import { hasHash } from './navigation.js';

function route() {
    const { init } = Object.values(routes).find(({ hash }) => hasHash(hash)) || routes.characters;

    init();
}

window.onhashchange = route;

route();
