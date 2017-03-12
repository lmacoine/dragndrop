var fruitsArr = ['Fraise', 'Poire', 'Banane', 'Pomme', 'Chien', 'Chat', 'Vache', 'Guitare', 'Voiture'];

fruitsArr.forEach(function(fruit) {
	$('<div id="'+ fruit + '"class="bin ' + fruit +'">' + fruit +' </div>')
  .appendTo("#bins")
  .droppable({
  	'accept': '#' + fruit,
  	'drop': function() {
    $(this).addClass('yeah');
   	}
  });
});

fruitsArr.sort();

fruitsArr.forEach(function(fruit) {
	$('<div id="' + fruit + '" class="small-square ' + fruit + '">' + fruit + '</div>')
  .appendTo("#fruits")
  .draggable({
  	revert: 'invalid'
  });
});