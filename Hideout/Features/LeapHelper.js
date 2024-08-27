register("renderEntity", (entity) => {
    if (Player && entity.getEntity() instanceof net.minecraft.entity.player.EntityPlayer) {
        Tessellator.pushMatrix()

       /* if (Settings().ScaleOnEveryone) Tessellator.scale(Settings().CustomPlayerScale, Settings().CustomPlayerScale, Settings().CustomPlayerScale)

        else */if (entity.getName() == Player.getName()) Tessellator.scale(0.3, 0.3, 0.3)

    }
})