# NGTCKubeJS
## Description
 Nothing good to create (NGTC) is what I'm calling a private Minecraft modpack themed around the [Create](https://www.curseforge.com/minecraft/mc-mods/create) mod. This repo exists to show what I learned about [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs)

## What is in here?
Mostly custom recipes using [Create](https://www.curseforge.com/minecraft/mc-mods/create). I've broken down what each contains and what it does. Most of this can be found on the [KubeJS Documentation](https://mods.latvian.dev/books/kubejs) but I had to figure out adding a custom enchantment from their Discord and from trial and error

----

### Server Scripts

----

#### recycle.js
There are two recycle.js files in the server_scripts folder. They are categories by what is used to do the recycling (ie. crushing or milling ). Crushing can recycle armor while milling cannot. Both milling and crushing can recycle [Sophisticated Backpacks](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks) but only crushing will have a chance to get all of that tiers items back. Milling will only return one

----

#### script.js
This is just the default catch all script for server scripts. Currently it holds the following
- Removed op [Reliquary Reincarnations](https://www.curseforge.com/minecraft/mc-mods/reliquary-v1-3) items from being craftable
- Crafting recipe for saddles
- Override the ore crushing to include a 30% chance to get a bonus crushed ore
- Added crushing recipe for deepslate cobble to turn into 3 guareneteed cobblestone and a chance for 2 extra cobblestone
- Holds the custom enchantment Beheading postAttack code. I put this here to make it easier to test as you just need to do `/reload` to load server scripts but startup scripts requires a restart

I don't think my method for droping mob heads will work in a public server but I play on a private one where everybody is OP and cheats are enabled. It uses the Minecraft `/summon` command and has the user of the sword with the enchantment call that command.

----

### Startup Scripts

----

#### script.js
Just one file and it currently only does one thing; add the Beheading enchantment to the game. It has 4 levels and each level increase the chance for a head to drop by 10%

----

### Client Scripts

----

#### script.js
Just one file and it only removes the OP [Reliquary Reincarnations](https://www.curseforge.com/minecraft/mc-mods/reliquary-v1-3) items from [Just Enough Items (JEI)](https://www.curseforge.com/minecraft/mc-mods/jei)

----

### Lang

----

#### en_us.json
Added this so that [Enchantment Description](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions) will display a custom description for the Beheading enchantment added.