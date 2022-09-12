onEvent('recipes', event => {

    const unbreakableAddOnItem = 'minecraft:nether_star'

    const recipeIDPrefix = 'nothinggood:shapeless/unbreakable/'

    const itemPrefixes = [ 
        // Vanilla
        'minecraft:wooden', 'minecraft:stone', 
        'minecraft:iron', 'minecraft:golden', 
        'minecraft:diamond', 'minecraft:netherite',
    
        // Advanced Netherite
        'advancednetherite:netherite_iron', 'advancednetherite:netherite_gold', 
        'advancednetherite:netherite_emerald', 'advancednetherite:netherite_diamond'
    ]

    const hammerAndSpades = [
        // Hammers! - Basic
        'hammers:wooden_hammer', 'hammers:stone_hammer', 
        'hammers:iron_hammer', 'hammers:golden_hammer', 
        'hammers:diamond_hammer', 'hammers:netherite_hammer',

        // Hammers! - Enhanced
        'hammers:enhanced_wooden_hammer', 'hammers:enhanced_stone_hammer', 
        'hammers:enhanced_iron_hammer', 'hammers:enhanced_golden_hammer', 
        'hammers:enhanced_diamond_hammer', 'hammers:enhanced_netherite_hammer',
        
        // Spades Extension! - Basic
        'spades_extension:wooden_spade', 'spades_extension:stone_spade', 
        'spades_extension:iron_spade', 'spades_extension:golden_spade', 
        'spades_extension:diamond_spade', 'spades_extension:netherite_spade',

        // Spades Extension! - Enhanced
        'spades_extension:enhanced_wooden_spade', 'spades_extension:enhanced_stone_spade', 
        'spades_extension:enhanced_iron_spade', 'spades_extension:enhanced_golden_spade', 
        'spades_extension:enhanced_diamond_spade', 'spades_extension:enhanced_netherite_spade'
    ]

    const hotbarItemSuffixes = [
        'sword', 'shovel', 'axe', 'pickaxe', 'hoe'
    ]

    const armorItemSuffixes = [
        'helmet', 'chestplate', 'leggings', 'boots'
    ]

    function addUnbreakableRecipe( item_id ) {
        let recipeID = recipeIDPrefix + item_id.split(':')[1]
        event.shapeless( Item.of( item_id, {Unbreakable:1} ), [ item_id, unbreakableAddOnItem ] ).id( recipeID )
    }

    console.log( "Adding Hammers! and Spades Extension item's Unbreakable recipes")
    hammerAndSpades.forEach( ( id ) => {
        event.shapeless( Item.of( id, {Unbreakable:1} ), [ id, unbreakableAddOnItem ] )
    })

    console.log( "Adding All Vanilla like item's Unbreakable recipes")
    itemPrefixes.forEach( ( prefix ) => {

        // Add 'hotbar' items
        hotbarItemSuffixes.forEach( ( suffix ) => {
            let id = prefix + '_' + suffix
            addUnbreakableRecipe( id )
        } )

        // Add armor items, skip if currently adding wooden or stone recipes
        if ( prefix != 'minecraft:wooden' && prefix != 'minecraft:stone' ) {
            armorItemSuffixes.forEach( ( suffix ) => {
                let id = prefix + '_' + suffix
                addUnbreakableRecipe( id )
            })
        }
    })

})