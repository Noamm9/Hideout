import config from "../data/config.js"
import renderBeaconBeam from "../../BeaconBeam"
import {
    BOLD,
    RED,
    branding,
    S1_Terminal_Locations_X,
    S1_Terminal_Locations_Y,
    S1_Terminal_Locations_Z,
    S2_Terminal_Locations_X,
    S2_Terminal_Locations_Y,
    S2_Terminal_Locations_Z,
    S3_Terminal_Locations_X,
    S3_Terminal_Locations_Y,
    S3_Terminal_Locations_Z,
    S4_Terminal_Locations_X,
    S4_Terminal_Locations_Y,
    S4_Terminal_Locations_Z
} from "../utils/stuff"

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


// Fire freeze timer

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

// Bonzo swap
const SwapTriggermsgs = ["[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!", "[BOSS] Storm: I should have known that I stood no chance."]
register("chat", (msg, event) => {
    if (!config().SwapBonzo) return;
    if (msg != SwapTriggermsgs[config().WhenBonzo]) return;
    IsBonzoEquipped = Player.armor.getHelmet().getName().includes("Bonzo's Mask")
    if (IsBonzoEquipped) return;
    Client.showTitle(`${RED}SWAP BONZO`, "", 0, 20, 0)
}).setCriteria(/(^\[BOSS\] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!$|^\[BOSS\] Storm: I should have known that I stood no chance\.$)/)

//Swap back
const SwapBackTriggermsgs = ["[BOSS] Goldor: ....", "[BOSS] Necron: All this, for nothing..."]
register("chat", (msg, event) => {
    if (!config().SwapBack) return;
    if (config().SwapBack == 0) return;
    if (msg != SwapBackTriggermsgs[config().SwapBack - 1]) return;
    IsBonzoEquipped = Player.armor.getHelmet().getName().includes("Bonzo's Mask")
    if (!IsBonzoEquipped) return;
    Client.showTitle(`${RED}SWAP BACK HELMET`, "", 0, 20, 0)
}).setCriteria(/(^\[BOSS\] Goldor: \.\.\.\.$|^\[BOSS\] Necron: All this, for nothing\.\.\.$)/)

// Terminal Waypoints
let in_p3 = false

register("chat", (event) => {
    in_p3 = true
}).setCriteria("[BOSS] Storm: I should have known that I stood no chance.")

register("chat", (event) => {
    in_p3 = false
}).setCriteria("The Core entrance is opening!")

register("renderWorld", () =>{
    if (!config().TermWaypoints) return;
    if (!in_p3) return;
    renderBeaconBeam(S1_Terminal_Locations_X[Settings.WhichTerm], S1_Terminal_Locations_Y[Settings.WhichTerm], S1_Terminal_Locations_Z[Settings.WhichTerm], Settings.TermWaypointsColor.getRed(), Settings.TermWaypointsColor.getGreen(), Settings.TermWaypointsColor.getBlue(), 0.8, false, 100)
    renderBeaconBeam(S2_Terminal_Locations_X[Settings.WhichTerm], S2_Terminal_Locations_Y[Settings.WhichTerm], S2_Terminal_Locations_Z[Settings.WhichTerm], Settings.TermWaypointsColor.getRed(), Settings.TermWaypointsColor.getGreen(), Settings.TermWaypointsColor.getBlue(), 0.8, false, 100)
    renderBeaconBeam(S3_Terminal_Locations_X[Settings.WhichTerm], S3_Terminal_Locations_Y[Settings.WhichTerm], S3_Terminal_Locations_Z[Settings.WhichTerm], Settings.TermWaypointsColor.getRed(), Settings.TermWaypointsColor.getGreen(), Settings.TermWaypointsColor.getBlue(), 0.8, false, 100)
    renderBeaconBeam(S4_Terminal_Locations_X[Settings.WhichTerm], S4_Terminal_Locations_Y[Settings.WhichTerm], S4_Terminal_Locations_Z[Settings.WhichTerm], Settings.TermWaypointsColor.getRed(), Settings.TermWaypointsColor.getGreen(), Settings.TermWaypointsColor.getBlue(), 0.8, false, 100)
})

// Auto gfs, credits to LeineV3 for most of the code
function Pearls() {
    const PearlStack = Player.getInventory().getItems().find(a => a?.getName() == "§fEnder Pearl")

    if (!PearlStack) {
        ChatLib.command(`gfs ender_pearl 16`)
        branding("Gave 16 Ender Pearls")
        return;
    }

    PearlstoGive = 16 - PearlStack.getStackSize()

    if (PearlstoGive == 0) {
        branding("Already at full stack!")
        return;
    }

    ChatLib.command(`gfs ender_pearl ${PearlstoGive}`)

    if (PearlstoGive == 1) {
        branding(`Gave ${PearlstoGive} Ender Pearl to fill stack`)
        return;
    }

    branding(`Gave ${PearlstoGive} Ender Pearls to fill stack`)
}

register("command", () =>{
    Pearls()
}).setCommandName("ep").setAliases(["epearl", "epearls", "pearls"])

function Leaps() {
    const LeapStack = Player.getInventory().getItems().find(a => a?.getName() == "§9Spirit Leap")

    if (!LeapStack) {
        ChatLib.command(`gfs spirit_leap 16`)
        branding("Gave 16 Spirit Leaps")
        return;
    }

    LeapstoGive = 16 - PearlStack.getStackSize()

    if (LeapstoGive == 0) {
        branding("Already at full stack!")
        return;
    }

    ChatLib.command(`gfs spirit_leap ${LeapstoGive}`)

    if (LeapstoGive == 1) {
        branding(`Gave ${LeapstoGive} Spirit Leap to fill stack`)
        return;
    }

    branding(`Gave ${LeapstoGive} Spirit Leaps to fill stack`)
}

register("command", () =>{
    Leaps()
}).setCommandName("sl").setAliases(["sleap", "sleaps", "leaps"])

function Jerry() {
    const JerryStack = Player.getInventory().getItems().find(a => a?.getName() == "§fInflatable Jerry")

    if (!JerryStack) {
        ChatLib.command(`gfs inflatable_jerry 64`)
        branding("Gave 64 Inflatable Jerry")
        return;
    }

    JerrytoGive = 64 - JerryStack.getStackSize()

    if (JerrytoGive == 0) {
        branding("Already at full stack!")
        return;
    }

    ChatLib.command(`gfs inflatable_jerry ${JerrytoGive}`)

    branding(`Gave ${JerrytoGive} Inflatable Jerry to fill stack`)
}

register("command", () =>{
    Jerry()
}).setCommandName("ij").setAliases(["ijerry", "ijerrys", "jerry", "jerrys", "jerries", "ijerries"])

register("chat", (event) =>{
    if (!config().AutoGFS) return;
    if (config().GFSPearls) {
        Pearls()
    }
    if (config().GFSLeaps) {
        Leaps()
    }
    if (config().GFSJerry) {
        Jerry()
    }
}).setCriteria("Starting in 3 seconds.")

register("chat", (event) => {
    cancel(event)
}).setCriteria(/Inflatable Jerry&r&a from your Sacks to your inventory\.|Ender Pearl&r&a from your Sacks to your inventory\.&r/).setContains()