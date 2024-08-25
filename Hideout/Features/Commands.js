// All / commands
export function sayCommands() {
  ChatLib.chat('\n&3&lCOMMANDS:')
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/hideout (Aliases: /ho, /hide)').setClickValue('/ho').setClickAction('run_command')).addTextComponent(new TextComponent('- &aOpens the gui\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/hideouthelp (Alias: /hohelp)').setClickValue('/hohelp').setClickAction('run_command')).addTextComponent(new TextComponent('- &aShows this help menu\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/ep (Aliases: /epearl, /epearls, /pearls)').setClickValue('/ep').setClickAction('run_command')).addTextComponent(new TextComponent('- &aFills stack of pearls\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/sl (Aliases: /sleap, /sleaps, /leaps)').setClickValue('/sl').setClickAction('run_command')).addTextComponent(new TextComponent('- &aFills stack of leaps\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/ij (Aliases: /ijerry, /ijerrys, /jerry, /jerrys, /jerries, /ijerries)').setClickValue('/ij').setClickAction('run_command')).addTextComponent(new TextComponent('- &aFills stack of inflatable jerries\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('\n&3&lPARTY COMMANDS:')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 !rifttime - Sends your remaining rift time to party chat\n')
  ChatLib.chat('&d----------------------------------------------')
}

// Help command
register('command', () => {
  sayCommands()
}).setName('hideouthelp').setAliases('hohelp')

// Party Commands
