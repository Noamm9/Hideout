import config from '../data/config'
import { registerWhen } from "../../BloomCore/utils/Utils"

let text = new Text('').setScale(2).setShadow(true).setAlign('CENTER').setColor(Renderer.YELLOW)
let startTime
let name
let action
let place

registerWhen(register("chat", (r, n, a, p) => {
    name = n
    action = a
    place = p
    startTime = Date.now()
}).setCriteria(/Party >( .+)? (\w+): (At|Inside) (.+)(!)?/), () => config().locationNotif)

registerWhen(register("renderOverlay", () => {
    const remaining = (1500 - (Date.now() - startTime ?? 0))
    if (remaining < 0) return

    text.setString(`${name} is ${action} ${place}!`)
    text.draw(Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 - 50)
    World.playSound(note.harp, 2, 2)
}), () => config().locationNotif && startTime && name != Player.getName())