//Credits to Volcaronitee

//Color codes
export const BLACK = "§0";
export const DARK_BLUE = "§1";
export const DARK_GREEN = "§2";
export const DARK_AQUA = "§3";
export const DARK_RED = "§4";
export const DARK_PURPLE = "§5";
export const GOLD = "§6";
export const GRAY = "§7";
export const DARK_GRAY = "§8";
export const BLUE = "§9";
export const GREEN = "§a";
export const AQUA = "§b";
export const RED = "§c";
export const LIGHT_PURPLE = "§d";
export const YELLOW = "§e";
export const WHITE = "§f";


//Formatting codes
export const OBFUSCATED = "§k";
export const BOLD = "§l";
export const STRIKETHROUGH = "§m";
export const UNDERLINE = "§n";
export const ITALIC = "§o";
export const RESET = "§r";

//Random shit
export const S1_Terminal_Locations_X = [111, 111, 89, 89]
export const S1_Terminal_Locations_Y = [113, 119, 112, 122]
export const S1_Terminal_Locations_Z = [73, 79, 92, 101]

export const S2_Terminal_Locations_X = [68, 59, 47, 39, 40]
export const S2_Terminal_Locations_Y = [109, 120, 109, 108, 124]
export const S2_Terminal_Locations_Z = [121, 121, 121, 138, 122]

export const S3_Terminal_Locations_X = [-3, -3, 20, -3]
export const S3_Terminal_Locations_Y = [109, 109, 123, 109]
export const S3_Terminal_Locations_Z = [112, 93, 93, 77]

export const S4_Terminal_Locations_X = [41, 44, 67, 72]
export const S4_Terminal_Locations_Y = [109, 121, 109, 115]
export const S4_Terminal_Locations_Z = [29, 29, 29, 47]

export function branding(msg) {
    ChatLib.chat("§bHideout §8» §r" + msg)
}