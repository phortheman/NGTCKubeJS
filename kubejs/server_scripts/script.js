// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

global.beheadingPostAttack = (attacker, target, level) =>
{
	if( target.getHealth() <= 0 ) { // Check if target is dead ( isLiving always returns true )
		head = null
		mob = target.getType()

		// See which head needs to drop
		switch ( mob ){
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
		roll = Math.floor( Math.random() * 10 ) + 1;

		// If the die roll is less than the enchantment level, drop a head if available
		if( level >= roll && head != null ) {
			attacker.runCommandSilent(`summon minecraft:item ${target.getX()} ${target.getY()} ${target.getZ()} { Item: { id: "${head}", Count: 1 } }`)
		}
	}
}

onEvent('recipes', event => {
	event.remove({output: 'reliquary:glowing_bread'})
	event.remove({output: 'reliquary:destruction_catalyst'})

	let oreCrushingOverride = ( recipeID, output, input ) => {
		event.remove({ id: 'create:crushing/' + recipeID } )
		event.recipes.createCrushing( [
			output,
			Item.of( output ).withChance( 0.3 ),
			Item.of( 'create:experience_nugget') .withChance( 0.75 )
		], input ).id( 'nothinggood:crushing/ores/' + recipeID )
	}

	oreCrushingOverride( 'raw_iron', 'create:crushed_iron_ore', 'minecraft:raw_iron' )
	oreCrushingOverride( 'raw_copper', 'create:crushed_copper_ore', 'minecraft:raw_copper' )
	oreCrushingOverride( 'raw_gold', 'create:crushed_gold_ore', 'minecraft:raw_gold' )
	oreCrushingOverride( 'raw_zinc', 'create:crushed_zinc_ore', 'create:raw_zinc' )

	event.recipes.createCrushing( [
		'3x minecraft:cobblestone',
		Item.of('2x minecraft:cobblestone').withChance(0.5) ],
		'minecraft:cobbled_deepslate' ).processingTime(100)

	event.shaped( 'minecraft:saddle', [
		'LLL',
		'L L',
		'I I'
		], {
		L: 'minecraft:leather',
		I: 'minecraft:iron_ingot'
	} )
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

