import config from "../data/config.js"

import {
    RED
} from "../utils/stuff.js"

//Cloak notifications
register("chat", (event) => {
    if (!config().CloakNotifier) return;
    Client.showTitle(`${RED}CLOAK ON`, "", 0, 15, 0);
}).setCriteria("Creeper Veil Activated!")

register("chat", (event) => {
    if (!config().CloakNotifier) return;
    Client.showTitle(`${RED}CLOAK OFF`, "", 0, 15, 0);
}).setCriteria(/^(?:Not enough mana! )?Creeper Veil De-activated!(?: \(Expired\))?$/)