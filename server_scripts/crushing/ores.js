onEvent('recipes', event => {

    const recipeIDPrefix = 'nothinggood:crushing/ores'

    let oreCrushingOverride = ( recipeID, output, input ) => {
        event.remove({ id: 'create:crushing/' + recipeID } )
        event.recipes.createCrushing( [
            output,
            Item.of( output ).withChance( 0.3 ),
            Item.of( 'create:experience_nugget') .withChance( 0.75 )
        ], input ).id( `${recipeIDPrefix}/recipeID` ).processingTime(100)
    }

    oreCrushingOverride( 'raw_iron', 'create:crushed_iron_ore', 'minecraft:raw_iron' )
    oreCrushingOverride( 'raw_copper', 'create:crushed_copper_ore', 'minecraft:raw_copper' )
    oreCrushingOverride( 'raw_gold', 'create:crushed_gold_ore', 'minecraft:raw_gold' )
    oreCrushingOverride( 'raw_zinc', 'create:crushed_zinc_ore', 'create:raw_zinc' )

})