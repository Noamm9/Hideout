import config from "../data/config"
import {
    RED
} from "../utils/stuff"

// Bonzo swap
const SwapTriggermsgs = ["[BOSS] The Watcher: That will be enough for now.", "[BOSS] The Watcher: You have proven yourself. You may pass.", "[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!", "[BOSS] Storm: I should have known that I stood no chance."]
register("chat", (msg, event) => {
    if (!config().SwapBonzo) return;
    if (msg != SwapTriggermsgs[config().WhenBonzo]) return;
    IsBonzoEquipped = Player.armor.getHelmet().getName().includes("Bonzo's Mask")
    if (IsBonzoEquipped) return;
    Client.showTitle(`${RED}SWAP BONZO`, "", 0, 20, 0)
}).setCriteria(/(^\[BOSS\] The Watcher: That will be enough for now\.$|^\[BOSS\] The Watcher: You have proven yourself\. You may pass\.$|^\[BOSS\] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!$|^\[BOSS\] Storm: I should have known that I stood no chance\.$)/)

// Swap back
const SwapBackTriggermsgs = ["[BOSS] Goldor: ....", "[BOSS] Necron: All this, for nothing..."]
register("chat", (msg, event) => {
    if (!config().SwapBack) return;
    if (config().SwapBack == 0) return;
    if (msg != SwapBackTriggermsgs[config().SwapBack - 1]) return;
    IsBonzoEquipped = Player.armor.getHelmet().getName().includes("Bonzo's Mask")
    if (!IsBonzoEquipped) return;
    Client.showTitle(`${RED}SWAP BACK HELMET`, "", 0, 20, 0)
}).setCriteria(/(^\[BOSS\] Goldor: \.\.\.\.$|^\[BOSS\] Necron: All this, for nothing\.\.\.$)/)