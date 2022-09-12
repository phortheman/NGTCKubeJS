onEvent('recipes', event => {
    const idPrefix = 'nothinggood:milling/recycle/'

    const backpackRecycle = ( backpackType ) => {
        let returnedOutput = [ '3x minecraft:leather', Item.of( '2x minecraft:string').withChance( 0.25 ) ]

        switch ( backpackType ) {
            case 'leather':
                return returnedOutput
            case 'iron':
                returnedOutput.push( 'minecraft:iron_ingot')
                break
            case 'gold':
                returnedOutput.push( 'minecraft:gold_ingot')
                break
            case 'diamond':
                returnedOutput.push( 'minecraft:diamond')
                break
            case 'netherite':
                // Netherite will return the ingot plus apply the diamond case
                returnedOutput.push( 'minecraft:netherite_ingot' )
                break
        }

        return returnedOutput
    }

    const recycleRecipes = [ 
        // Backpacks
        {
            outputs: backpackRecycle('leather'),
            input: Item.of( 'sophisticatedbackpacks:backpack' ).ignoreNBT(),
            id: `${idPrefix}backpack`
        },
        {
            outputs: backpackRecycle('iron'),
            input: Item.of( 'sophisticatedbackpacks:iron_backpack' ).ignoreNBT(),
            id: `${idPrefix}iron_backpack`
        },
        {
            outputs: backpackRecycle('gold'),
            input: Item.of( 'sophisticatedbackpacks:gold_backpack' ).ignoreNBT(),
            id: `${idPrefix}gold_backpack`
        },
        {
            outputs: backpackRecycle('diamond'),
            input: Item.of( 'sophisticatedbackpacks:diamond_backpack' ).ignoreNBT(),
            id: `${idPrefix}diamond_backpack`
        },
        {
            outputs: backpackRecycle('netherite'),
            input: Item.of( 'sophisticatedbackpacks:netherite_backpack' ).ignoreNBT(),
            id: `${idPrefix}netherite_backpack`
        }
    ]


    recycleRecipes.forEach( ( recipe ) => {
        event.recipes.create.milling( recipe.outputs, recipe.input ).id( recipe.id )
    } )

} )