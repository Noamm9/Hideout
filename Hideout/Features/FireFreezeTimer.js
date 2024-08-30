import config from "../data/config"

register("chat", () =>{
    if (!config().FireFreezeToggle) return;
    new Thread(() => {
        Thread.sleep(1200);
        World.playSound("note.pling", 2, 1);
        Client.showTitle(`${RED}Use FFS in 4...`, "", 0, 20, 0);
        Thread.sleep(1000);
        World.playSound("note.pling", 2, 1);
        Client.showTitle(`${RED}Use FFS in 3...`, "", 0, 20, 0);
        Thread.sleep(1000);
        World.playSound("note.pling", 2, 1);
        Client.showTitle(`${RED}Use FFS in 2...`, "", 0, 20, 0);
        Thread.sleep(1000);
        World.playSound("note.pling", 2, 1);
        Client.showTitle(`${RED}Use FFS in 1...`, "", 0, 20, 0);
        Thread.sleep(1000);
        World.playSound("random.anvil_land", 2, 1);
        Client.showTitle(`${RED}Use FFS NOW`, "", 0, 20, 0);
    }).start();
}).setCriteria("[BOSS] The Professor: Oh? You found my Guardians' one weakness?")