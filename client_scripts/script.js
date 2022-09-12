// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	event.hide( 'reliquary:glowing_bread' )
	event.hide( 'reliquary:destruction_catalyst' )
})

// onEvent("item.tooltip", event => {
// 	event.addAdvanced("nothinggood:beheading", (stack, __, tooltip) => {
// 		const { StoredEnchantments: [ { id: { namespace, path } } ] } = stack.nbt;
// 		tooltip.add(Component.translate(`enchantment.${namespace}.${path}.desc`).darkGray());
// 	  });
//   });