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
      global.beheadingPostAttack(entity, target, level)
    })

})