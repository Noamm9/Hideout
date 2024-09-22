import config from "../data/config"
import renderBeaconBeam from "../../BeaconBeam"
import { GetP3Section, drawTrace } from "../utils/stuff"

let in_p3 = false

// Guess who made this code (hint: starts with a N and has worked too hard to help me <3)

export const Terminal_Locations = {
    Section1: [
        [111, 113, 73],
        [111, 119, 79],
        [89, 112, 92],
        [89, 122, 101],
    ],

    Section2: [
        [68, 109, 121] ,
        [59, 120, 121] ,
        [47, 109, 121] ,
        [39, 108, 138] ,
        [40, 124, 122] ,
    ],

    Section3: [
        [-3, 109, 112] ,
        [-3, 109, 93],
        [20, 123, 93],
        [-3, 109, 77],
    ],

    Section4: [
        [41, 109, 29],
        [44, 121, 29],
        [67, 109, 29],
        [72, 115, 47] 
    ]
}


register("chat", (event) => in_p3 = true).setCriteria("[BOSS] Storm: I should have known that I stood no chance.")
register("chat", event => in_p3 = false).setCriteria("The Core entrance is opening!")

function DoStuff(term, color) {
    const sectiontoload = Terminal_Locations[GetP3Section() - 1]
    renderBeaconBeam(
        ...sectiontoload[term], 
        color[0], color[1], color[2],
        0.8, false, 100
    )
    if (!config().TermTracers) return;
    drawTrace(
        ...sectiontoload[term],
        color[0], color[1], color[2],
    )
}

register("renderWorld", () =>{
    if (!config().TermWaypoints) return;
    if (!in_p3) return;

    DoStuff(config().WhichTerm, config().TermWaypointsColor)
})