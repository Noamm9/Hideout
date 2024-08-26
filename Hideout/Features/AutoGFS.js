import config from "../data/config"
import {
    branding
} from "../utils/stuff"

// Credits to LeineV3 for most of the code
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
}).setCriteria("Starting in 3 seconds.")

register("chat", (event) => {
    if (!config().AutoGFS) return;
    if (config().GFSJerry) {
        Jerry()
    }
}).setCriteria("Starting in 2 seconds.")

register("chat", (event) => {
    cancel(event)
}).setCriteria(/Inflatable Jerry&r&a from your Sacks to your inventory\.|Ender Pearl&r&a from your Sacks to your inventory\.&r/).setContains()