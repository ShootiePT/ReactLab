import { getUser } from '../service/api.js';
import helloView from '../view/hello.js';

export default function init() {
    const {firstName, lastName} = getUser();
    helloView(`Hello ${firstName} ${lastName}`);
}
