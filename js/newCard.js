var $newCard = document.querySelector('.newCard');

var $newCardNome = document.querySelector('.newCard-nome');
var $newCardEmail = document.querySelector('.newCard-email');
var $newCardTelefone = document.querySelector('.newCard-telefone');

var $newCardAction = document.querySelector('.newCard-action');

var contatos = {
	"Robson":{
		"email": "asd@gmail.com",
		"tel": 2222222
	},
	"Lucas":{
		"email": "asd@gmail.com",
		"tel": 2222222
	},
	"Fulano":{
		"email": "asd@gmail.com",
		"tel": 2222222
	}
};

var yourval = jQuery.parseJSON(JSON.stringify(contatos));
console.log(yourval);

$newCard.addEventListener('submit', function(event){
	event.preventDefault();

	if($newCardNome.value != '') {
		var $wrapCard = document.querySelector('.wrap-card');
		var $card = document.querySelector('.card');
		var $copyCard = $card.cloneNode(true);

		$copyCard.querySelector('.card-content').querySelector('.contatoNome').textContent = $newCardNome.value;
		$copyCard.querySelector('.card-content').querySelector('.contatoEmail').textContent = $newCardEmail.value;
		$copyCard.querySelector('.card-content').querySelector('.contatoTelefone').textContent = $newCardTelefone.value;



		$wrapCard.insertBefore($copyCard, $card);
		
	};

});
