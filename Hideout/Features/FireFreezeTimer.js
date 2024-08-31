import config from "../data/config"
import {
    RED,
    AQUA
} from "../utils/stuff"

register("chat", () =>{
    if (!config().FireFreezeToggle) return;
    new Thread(() => {
        Thread.sleep(200);
        World.playSound("note.pling", 2, 1);
        Client.showTitle(`${RED}Use FFS in 5...`, "", 0, 21, 0);
        Thread.sleep(1000);
        World.playSound("note.pling", 2, 1);
        Client.showTitle(`${RED}Use FFS in 4...`, "", 0, 21, 0);
        Thread.sleep(1000);
        World.playSound("note.pling", 2, 1);
        Client.showTitle(`${RED}Use FFS in 3...`, "", 0, 21, 0);
        Thread.sleep(1000);
        World.playSound("note.pling", 2, 1);
        Client.showTitle(`${RED}Use FFS in 2...`, "", 0, 21, 0);
        Thread.sleep(1000);
        World.playSound("note.pling", 2, 1);
        Client.showTitle(`${RED}Use FFS in 1...`, "", 0, 21, 0);
        Thread.sleep(1000);
        World.playSound("random.anvil_land", 2, 1);
        Client.showTitle(`${AQUA}Use FFS NOW`, "", 0, 21, 0);
    }).start();
}).setCriteria("[BOSS] The Professor: Oh? You found my Guardians' one weakness?")