register("renderEntity", (Entity, pos, ticks, event) => {
    if (Entity.getClassName() !== "EntityPlayer" && Player.getName() !== Entity.getName()) return;
    cancel(event)
})