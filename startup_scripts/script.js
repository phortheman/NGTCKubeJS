// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent( 'block.modifications', event => {
	// event.modify( 'minecraft:bedrock', block => {
	// 	block.destroySpeed = 1
	// })

})

onEvent( 'enchantment.registry', event => {
	console.log( "Registering Enchantments" )

	let beheadingEnchantment = event.create("nothinggood:beheading")
	beheadingEnchantment.displayName("Beheading")
	beheadingEnchantment.minLevel(1)
	beheadingEnchantment.maxLevel(4)
	beheadingEnchantment.slots([EquipmentSlot.MAINHAND, EquipmentSlot.OFFHAND])
	beheadingEnchantment.weapon()
	beheadingEnchantment.rare()

	beheadingEnchantment.postAttack((entity, target, level) =>
    {
      // Post attack declared in server_scripts for easy testing
    //   global.beheadingPostAttack(entity, target, level)
	
	// Post attack declared in server_scripts for easy testing
	if (!target.isAlive()) 
	{
		let head = null
		const mob = target.getType()

		// See which head needs to drop
		switch (mob) {
			case 'minecraft:zombie':
				head = 'minecraft:zombie_head'
				break
			case 'minecraft:wither_skeleton':
				head = 'minecraft:wither_skeleton_skull'
				break
			case 'minecraft:skeleton':
				head = 'minecraft:skeleton_skull'
				break
			case 'minecraft:creeper':
				head = 'minecraft:creeper_head'
				break
		}

		// "Roll" a 10 sided die
		const roll = Math.floor(Math.random() * 10) + 1;

		// If the die roll is less than the enchantment level, drop a head if available
		if (level >= roll && head != null) {
			attacker.runCommandSilent(`summon minecraft:item ${target.getX()} ${target.getY()} ${target.getZ()} { Item: { id: "${head}", Count: 1 } }`)
		}

	}
    })

})