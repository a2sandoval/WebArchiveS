'use strict';

function toolbarHide(){
	console.log('kek');
}

//recebe um numero e devolve com as casas decimais pedidas. Se tiver vazio devolve com 1 casa decimal.
function roundNumber(number,decimas){
	var output;

	switch(decimas){
		case 0:
			output = 1;
			break;
		case 1:
			output = 10;
			break;
		case 2:
			output = 100;
			break;
		case 3:
			output = 1000;
			break;
		case 4:
			output = 10000;
			break;
		default:
			output = 10;
			break;
	}
	return Math.round(number * output) / output;
}

//recebe libras e converte para kg. Arredonda para uma casa decimal.
function lbsToKg(lbs){
	return roundNumber(lbs*0.453592);
}

//recebe kg e converte para kg. Arredonda para uma casa decimal.
function kgToLbs(kg){
	return roundNumber(kg*2.20462);
}

//Função que pede as reps para se chegar a um certo 1rm. usado na descrição por baixo do grafico
function weightToDescription(repetitions, rm){
	return ((30*rm)/(repetitions+30));
}
