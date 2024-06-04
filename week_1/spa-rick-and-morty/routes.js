import characterList from './controller/list.js';
import characterDetails from './controller/details.js';

export const characters = {
    hash: '#characters',
    init: characterList
};

export const details = {
    hash: '#details',
    init: characterDetails
};
