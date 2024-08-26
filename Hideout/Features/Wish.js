import config from "../data/config.js"
import {
    BOLD,
    RED,
} from "../utils/stuff.js"

// Wish Message
register("chat", (event) => {
    if (!config().WishMessage) return;
    ChatLib.command(`pc ${config().WishText}`)
    if (!config().WishAlert) return;
    Client.showTitle("", `${BOLD}${RED}WISH`, 5, 50, 5) 
}).setCriteria(/^⚠ Maxor is enraged! ⚠$|^\[BOSS\] Goldor: You have done it, you destroyed the factory…$/);

// Wish title
register("RenderTitle", (title, subTitle, event) => {
    if (subTitle.removeFormatting() !== "⚠ Maxor is enraged! ⚠") return; 
    cancel(event)
    if (!config().WishAlert) return;
    Client.showTitle("", `${BOLD}${RED}WISH`, 5, 50, 5) 
});