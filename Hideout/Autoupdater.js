// Credit to Noamm9 from NoammAddons

import {
    fullName,
    branding,
    CloseGame,
    DARK_RED,
    GOLD,
    BOLD,
    WHITE,
    GREEN,
    GRAY
} from "./utils/stuff"
import axios from "../Axios"

const File = Java.type("java.io.File")
const URL = Java.type("java.net.URL")
const PrintStream = Java.type("java.io.PrintStream")
const Byte = Java.type("java.lang.Byte")


function urlToFile(url, destination, connecttimeout, readtimeout) {
    const d = new File(destination)
    d.getParentFile().mkdirs()
    const connection = new URL(url).openConnection()
    connection.setDoOutput(true)
    connection.setConnectTimeout(connecttimeout)
    connection.setReadTimeout(readtimeout)
    const IS = connection.getInputStream()
    const FilePS = new PrintStream(destination)
    let buf = new Packages.java.lang.reflect.Array.newInstance(Byte.TYPE, 65536)
    let len
    while ((len = IS.read(buf)) > 0) {
        FilePS.write(buf, 0, len)
    }
    IS.close()
    FilePS.close()
}

register("command", () => UpdateThread.start()).setName(`updateho`)

const UpdateThread = new Thread(() => {
    try {
        urlToFile("https://github.com/Hideshichan/Hideout/releases/download/Release/Hideout.zip", "config/ChatTriggers/modules/HideoutAutoUpdater.zip", 1000, 2000)
        Thread.sleep(5000)

        ChatLib.chat(branding(`§r §cOld file deleted:§6 ${FileLib.deleteDirectory("config/ChatTriggers/modules/Hideout")}`))

        FileLib.unzip(`config/ChatTriggers/modules/HideoutAutoUpdater.zip`, `config/ChatTriggers/modules`)
        ChatLib.chat(branding(`§r §eUnzipping HideoutAutoUpdater.zip`))
        Thread.sleep(5000)

        FileLib.delete("config/ChatTriggers/modules/HideoutAutoUpdater.zip")
        ChatLib.chat(branding(`§r §4[TEMP FILE]§r HideoutAutoUpdater.zip §cDeleted`))
        new TextComponent(ChatLib.getCenteredText(`§aFinished Updating! §bClick here to run /ct reload.`)).setClickAction("run_command").setClickValue("/ct load").chat()
        
    } catch (e) {branding(`§rError Updating ${fullName}:\n\n§c${e}`)}
})

/**
 * Retrieves the current version of the addon from the metadata.json file.
 *
 * @returns {string|null} The current version, or null if reading the version fails.
 */
function getCurrentVersion() {
    try {
      const metadataJson = FileLib.read("Hideout", "metadata.json");
      const metadata = JSON.parse(metadataJson);
      return metadata.version;
    } catch (err) {
      ChatLib.chat(branding + DARK_RED + (err.cause ?? err));
    }
}

/**
 * If version1 < version 2 return true else false.
 *
 * @param {String} version1 - Version X.X.X numero 1
 * @param {String} version2 - Version X.x.x numero 2
 * @returns
 */
function compareVersions(version1, version2) {
    const parts1 = version1.split(".").map(Number);
    const parts2 = version2.split(".").map(Number);
  
    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
      let part1 = parts1[i] || 0;
      let part2 = parts2[i] || 0;
  
      if (part1 < part2) return true;
      else if (part1 > part2) return false;
    }
  
    return false; // Both versions are equal
}

export function updater() { // Big credit to volc (its basically copy pasted but changed to work with more stolen code LMFAO)
    releaseURL = "https://api.github.com/repos/Hideshichan/Hideout/releases"

    axios
        .get(releaseURL)
        .then((response) =>{
            const release = response.data
            if (release.length === 0) {
                ChatLib.chat(`You are on the latest version of hideout (${WHITE + BOLD}v${currentVersion + GREEN + BOLD})`);
                return;
            }
            const latestVersion = release.name.replace("v", "")
            const currentVersion = getCurrentVersion()
            if (compareVersions(currentVersion, latestVersion)) {
                ChatLib.chat(`\n${branding + GOLD + BOLD}NEW RELEASE: ${WHITE + BOLD}v${latestVersion}`)
                new TextComponent(ChatLib.getCenteredText("Click here to update Hideout")).setClickAction("run_command").setClickValue("/updateho").chat()
            }
            else {
                ChatLib.chat(
                    `\n${branding + GREEN + BOLD}You are on the latest version (${WHITE + BOLD}v${currentVersion + GREEN + BOLD})!\n`
                );
                ChatLib.chat(`${GRAY + BOLD}Changelog:`)
                JSON.parse(FileLib.read("Hideout", "changelog.json")).forEach((change) => {
                    ChatLib.chat(change)
                })
                ChatLib.chat("")
            }
        })
}