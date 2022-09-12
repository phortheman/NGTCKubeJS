onEvent('recipes', event => {
    const idPrefix = 'nothinggood:crushing/recycle/'

    // Function to return an array the size of the number of the itemstack each with a defined chance of success
    const numberReturned = ( itemstack, guaranteed ,bonus, chance ) => {
        let returnedOutput = []

        // If chance is undefined, default to 25%
        if( chance == null ) chance = .15

        returnedOutput.push( Item.of( itemstack, guaranteed ) )

        for( let j = 0; j < bonus; j++ ) {
            returnedOutput.push( Item.of( itemstack ).withChance(chance) )
        }
        return returnedOutput
    }

    const backpackRecycle = ( backpackType ) => {
        let returnedOutput = [ '3x minecraft:leather', Item.of( '2x minecraft:string').withChance( 0.25 ) ]

        let material = ''
        switch ( backpackType ) {
            case 'leather':
                return returnedOutput
            case 'iron':
                material = 'minecraft:iron_ingot'
                break
            case 'gold':
                material = 'minecraft:gold_ingot'
                break
            case 'diamond':
                material = 'minecraft:diamond'
                break
            case 'netherite':
                // Netherite will return the ingot plus apply the diamond case
                material = 'minecraft:diamond'
                returnedOutput.push( 'minecraft:netherite_ingot' )
                break
        }
        returnedOutput.push( Item.of( material, 4 ) )
        returnedOutput.push( Item.of( material, 3 ).withChance(0.5) )
        returnedOutput.push( Item.of( material, 2 ).withChance(0.25) )

        return returnedOutput
    }

    const recycleRecipes = [
        // Helmets
        {
            outputs: numberReturned( 'minecraft:leather', 3, 2 ),
            input: 'minecraft:leather_helmet',
            id: `${idPrefix}leather_helmet`
        },
        {
            outputs: numberReturned( 'minecraft:iron_ingot', 3, 2 ),
            input: 'minecraft:iron_helmet',
            id: `${idPrefix}iron_helmet`
        },
        {
            outputs: numberReturned( 'minecraft:iron_nugget', 3, 2 ),
            input: 'minecraft:chainmail_helmet',
            id: `${idPrefix}chainmail_helmet`
        },
        {
            outputs: numberReturned( 'minecraft:gold_ingot', 3, 2 ),
            input: 'minecraft:golden_helmet',
            id: `${idPrefix}golden_helmet`
        },
        {
            outputs: numberReturned( 'minecraft:diamond', 3, 2, .1 ),
            input: 'minecraft:diamond_helmet',
            id: `${idPrefix}diamond_helmet`
        },

        // Leggings
        {
            outputs: numberReturned( 'minecraft:leather', 4, 3 ),
            input: 'minecraft:leather_leggings',
            id: `${idPrefix}leather_leggings`
        },
        {
            outputs: numberReturned( 'minecraft:iron_ingot', 4, 3 ),
            input: 'minecraft:iron_leggings',
            id: `${idPrefix}iron_leggings`
        },
        {
            outputs: numberReturned( 'minecraft:iron_nugget', 4, 3 ),
            input: 'minecraft:chainmail_leggings',
            id: `${idPrefix}chainmail_leggings`
        },
        {
            outputs: numberReturned( 'minecraft:gold_ingot', 4, 3 ),
            input: 'minecraft:golden_leggings',
            id: `${idPrefix}golden_leggings`
        },
        {
            outputs: numberReturned( 'minecraft:diamond', 4, 3, .1 ),
            input: 'minecraft:diamond_leggings',
            id: `${idPrefix}diamond_leggings`
        },

        // Chestplate
        {
            outputs: numberReturned( 'minecraft:leather', 6, 2 ),
            input: 'minecraft:leather_chestplate',
            id: `${idPrefix}leather_chestplate`
        },
        {
            outputs: numberReturned( 'minecraft:iron_ingot', 6, 2 ),
            input: 'minecraft:iron_chestplate',
            id: `${idPrefix}iron_chestplate`
        },
        {
            outputs: numberReturned( 'minecraft:iron_nugget', 6, 2 ),
            input: 'minecraft:chainmail_chestplate',
            id: `${idPrefix}chainmail_chestplate`
        },
        {
            outputs: numberReturned( 'minecraft:gold_ingot', 6, 2 ),
            input: 'minecraft:golden_chestplate',
            id: `${idPrefix}golden_chestplate`
        },
        {
            outputs: numberReturned( 'minecraft:diamond', 6, 2, .1 ),
            input: 'minecraft:diamond_chestplate',
            id: `${idPrefix}diamond_chestplate`
        },

        // Boots
        {
            outputs: numberReturned( 'minecraft:leather', 2, 2 ),
            input: 'minecraft:leather_boots',
            id: `${idPrefix}leather_boots`
        },
        {
            outputs: numberReturned( 'minecraft:iron_ingot', 2, 2 ),
            input: 'minecraft:iron_boots',
            id: `${idPrefix}iron_boots`
        },
        {
            outputs: numberReturned( 'minecraft:iron_nugget', 2, 2 ),
            input: 'minecraft:chainmail_boots',
            id: `${idPrefix}chainmail_boots`
        },
        {
            outputs: numberReturned( 'minecraft:gold_ingot', 2, 2 ),
            input: 'minecraft:golden_boots',
            id: `${idPrefix}golden_boots`
        },
        {
            outputs: numberReturned( 'minecraft:diamond', 2, 2, .1 ),
            input: 'minecraft:diamond_boots',
            id: `${idPrefix}diamond_boots`
        },

        // Swords
        {
            outputs: Item.of( 'minecraft:stick', 2 ),
            input: Item.of( 'minecraft:wooden_sword' ),
            id: `${idPrefix}wooden_sword`
        },
        {
            outputs: Item.of( 'minecraft:cobblestone', 2 ),
            input: Item.of( 'minecraft:stone_sword' ),
            id: `${idPrefix}stone_sword`
        },
        {
            outputs: Item.of( 'minecraft:iron_ingot', 2 ),
            input: Item.of( 'minecraft:iron_sword' ),
            id: `${idPrefix}iron_sword`
        },
        {
            outputs: Item.of( 'minecraft:gold_ingot', 2 ),
            input: Item.of( 'minecraft:golden_sword' ),
            id: `${idPrefix}gold_sword`
        },
        {
            outputs: Item.of( 'minecraft:diamond', 2 ),
            input: Item.of( 'minecraft:diamond_sword' ),
            id: `${idPrefix}diamond_sword`
        },
        {
            outputs: [ Item.of( 'minecraft:netherite_ingot', 1 ), Item.of( 'minecraft:diamond', 2 ) ],
            input: Item.of( 'minecraft:netherite_sword' ),
            id: `${idPrefix}netherite_sword`
        },


        // Pickaxes
        {
            outputs: Item.of( 'minecraft:stick', 3 ),
            input: Item.of( 'minecraft:wooden_pickaxe' ),
            id: `${idPrefix}wooden_pickaxe`
        },
        {
            outputs: Item.of( 'minecraft:cobblestone', 3 ),
            input: Item.of( 'minecraft:stone_pickaxe' ),
            id: `${idPrefix}stone_pickaxe`
        },
        {
            outputs: Item.of( 'minecraft:iron_ingot', 3 ),
            input: Item.of( 'minecraft:iron_pickaxe' ),
            id: `${idPrefix}iron_pickaxe`
        },
        {
            outputs: Item.of( 'minecraft:gold_ingot', 3 ),
            input: Item.of( 'minecraft:golden_pickaxe' ),
            id: `${idPrefix}gold_pickaxe`
        },
        {
            outputs: Item.of( 'minecraft:diamond', 3 ),
            input: Item.of( 'minecraft:diamond_pickaxe' ),
            id: `${idPrefix}diamond_pickaxe`
        },
        {
            outputs: [ Item.of( 'minecraft:netherite_ingot', 1 ), Item.of( 'minecraft:diamond', 3 ) ],
            input: Item.of( 'minecraft:netherite_pickaxe' ),
            id: `${idPrefix}netherite_pickaxe`
        },

        // Axes
        {
            outputs: Item.of( 'minecraft:stick', 3 ),
            input: Item.of( 'minecraft:wooden_axe' ),
            id: `${idPrefix}wooden_axe`
        },
        {
            outputs: Item.of( 'minecraft:cobblestone', 3 ),
            input: Item.of( 'minecraft:stone_axe' ),
            id: `${idPrefix}stone_axe`
        },
        {
            outputs: Item.of( 'minecraft:iron_ingot', 3 ),
            input: Item.of( 'minecraft:iron_axe' ),
            id: `${idPrefix}iron_axe`
        },
        {
            outputs: Item.of( 'minecraft:gold_ingot', 3 ),
            input: Item.of( 'minecraft:golden_axe' ),
            id: `${idPrefix}gold_axe`
        },
        {
            outputs: Item.of( 'minecraft:diamond', 3 ),
            input: Item.of( 'minecraft:diamond_axe' ),
            id: `${idPrefix}diamond_axe`
        },
        {
            outputs: [ Item.of( 'minecraft:netherite_ingot', 1 ), Item.of( 'minecraft:diamond', 3 ) ],
            input: Item.of( 'minecraft:netherite_axe' ),
            id: `${idPrefix}netherite_axe`
        },

        // Shovels
        {
            outputs: Item.of( 'minecraft:stick', 1 ),
            input: Item.of( 'minecraft:wooden_shovel' ),
            id: `${idPrefix}wooden_shovel`
        },
        {
            outputs: Item.of( 'minecraft:cobblestone', 1 ),
            input: Item.of( 'minecraft:stone_shovel' ),
            id: `${idPrefix}stone_shovel`
        },
        {
            outputs: Item.of( 'minecraft:iron_ingot', 1 ),
            input: Item.of( 'minecraft:iron_shovel' ),
            id: `${idPrefix}iron_shovel`
        },
        {
            outputs: Item.of( 'minecraft:gold_ingot', 1 ),
            input: Item.of( 'minecraft:golden_shovel' ),
            id: `${idPrefix}gold_shovel`
        },
        {
            outputs: Item.of( 'minecraft:diamond', 1 ),
            input: Item.of( 'minecraft:diamond_shovel' ),
            id: `${idPrefix}diamond_shovel`
        },
        {
            outputs: [ Item.of( 'minecraft:netherite_ingot', 1 ), Item.of( 'minecraft:diamond', 1 ) ],
            input: Item.of( 'minecraft:netherite_shovel' ),
            id: `${idPrefix}netherite_shovel`
        },

        // Hoes
        {
            outputs: Item.of( 'minecraft:stick', 2 ),
            input: Item.of( 'minecraft:wooden_hoe' ),
            id: `${idPrefix}wooden_hoe`
        },
        {
            outputs: Item.of( 'minecraft:cobblestone', 2 ),
            input: Item.of( 'minecraft:stone_sword' ),
            id: `${idPrefix}stone_hoe`
        },
        {
            outputs: Item.of( 'minecraft:iron_ingot', 2 ),
            input: Item.of( 'minecraft:iron_hoe' ),
            id: `${idPrefix}iron_hoe`
        },
        {
            outputs: Item.of( 'minecraft:gold_ingot', 2 ),
            input: Item.of( 'minecraft:golden_hoe' ),
            id: `${idPrefix}gold_hoe`
        },
        {
            outputs: Item.of( 'minecraft:diamond', 2 ),
            input: Item.of( 'minecraft:diamond_hoe' ),
            id: `${idPrefix}diamond_hoe`
        },
        {
            outputs: [ Item.of( 'minecraft:netherite_ingot', 1 ), Item.of( 'minecraft:diamond', 2 ) ],
            input: Item.of( 'minecraft:netherite_hoe' ),
            id: `${idPrefix}netherite_hoe`
        },

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
        event.recipes.create.crushing( recipe.outputs, recipe.input ).id( recipe.id )
    } )

} )