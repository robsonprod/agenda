var $wrapCard = document.querySelector('.wrap-card');
var $cardActions = document.querySelectorAll('.card-actions');


// for(var index = 0; index < $cards.length; index++){
	$wrapCard.addEventListener('click', function(event){

		var $this = event.target;
		var $card = $this.parentNode.parentNode.parentNode;

		for(var position = 0; position < $cardActions.length; position++){
			$cardActions[position].classList.remove('isActive');
		}

		if($this.classList.contains('card-actions_del')){
			$card.remove();
		};

		if($this.classList.contains('card-actions_edit')){

			var $cardContent = $card.querySelector('.card-content');
			
			if($cardContent.getAttribute('contenteditable') == 'false'){
				$cardContent.setAttribute('contenteditable', 'true');
				$cardContent.focus();
				$this.classList.add('isActive');
			}else{
				$cardContent.setAttribute('contenteditable', 'false');
				$cardContent.blur();
				$this.classList.remove('isActive');
			};
			
		};

	});
// };