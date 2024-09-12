import config from "../data/config"
import {
    RED,
    BOLD
} from "../utils/stuff"

// Rift pchat message & notification
register("chat", (event) => {
    if (!config().RiftTimeNotifier) return;
    World.playSound("note.pling", 2, 1);
    World.playSound("note.pling", 2, 1);
    World.playSound("note.pling", 2, 1);
    Client.showTitle(`${BOLD}${RED}10 seconds left!`, "", 5, 50, 5);
    if (!config().RiftTimePchatMsg) return;
    ChatLib.command("pc Being forced out of the rift in 10 seconds.")
}).setCriteria("  THE RIFT IS COLLAPSING");

// !rifttime command
register("chat", (event) => {
    if (!config().RiftCommands) return;
    const tablist = TabList.getNames();
    let RiftTimeString = tablist.findIndex(tab => tab.startsWith(`§r§b§lGood to know:`));
    RiftTime = tablist[RiftTimeString + 3]
    RiftTime = RiftTime.removeFormatting()
    if (RiftTime.includes("Rift Time Left:")) {
        ChatLib.command(`pc ${RiftTime}`) 
    }
    else {
        ChatLib.command(`pc Command Failed!`)
    }
}).setCriteria(/Party >( .+)? (\w+): !rifttime/);