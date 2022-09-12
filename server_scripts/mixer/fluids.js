onEvent('recipes', event => {

    const recipeIDPrefix = 'nothinggood:mixer/fluids'

    event.recipes.createMixing( 
        Item.of( 'minecraft:obsidian'), 
        [ 
            Fluid.of( 'minecraft:lava', 1000 ), 
            Fluid.of( 'minecraft:water', 1000 ) 
        ] )
        .processingTime(40)
        .id( `${recipeIDPrefix}/obsidian`)

})