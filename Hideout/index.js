import "./Features/AutoGFS"
import "./Features/BonzoSwaps"
import "./Features/CloakNotifications"
import "./Features/Commands"
import "./Features/FireFreezeTimer"
import "./Features/MinibossTracker"
import "./Features/Rift"
import "./Features/TerminalWaypoints"
import "./Features/Wish"
import "./firstload"
import "./Features/LeapHelper"
import "./Autoupdater"
import { updater } from "./Autoupdater"

const checker = register("tick", () => {
    updater()
})