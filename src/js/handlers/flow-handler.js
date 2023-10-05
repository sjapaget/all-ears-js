import namesScreen from "../screens/names-screen";
import settingsScreen from "../screens/settings-screen";
import welcomeScreen from "../screens/welcome-screen";
import pickScreen from "../screens/pick-screen";
import scoresScreen from "../screens/scores-screen";
import { 
	quizScreen,
	selected,
} from "../screens/quiz-screen";

import { 
	changeNbOfPlayers,
	getNbOfRounds,
	numberOfRounds,
} from './settings-screen-handler';

import { 
	searchSpotify,
	songId,
	getToken,
} from "./pick-screen-handler";

import { 
	getPlayersData,
	playersData,
	totalOfPlayers,
} from "./names-screen-handler";

import { selectOption } from "./quiz-screen-handler";

let currentScreen;
export { currentScreen };		// => goes to pick-screen-handler so it can add the iframe to the screen upon song search
let songsDataList = [];
export { songsDataList }

let player = 0;
let currentRound = 1;



export function flowEvents(){

	const appContainer = document.querySelector('#app');
	currentScreen = document.querySelector('main');
	let nextButton = document.getElementById('next');
	let returnButton = document.getElementById('return');

	if(nextButton) {
		nextButton.addEventListener('click', nextScreen);
		document.addEventListener('keydown', nextScreen);
	}
	if(returnButton) returnButton.addEventListener('click', previousScreen);


	function nextScreen(event){

		if(event.type == "keydown" && event.code != "Enter"){
			return;
		}
		// This prevents 'Enter' keydown event to be triggered multiple times (if the key is held)
		if(event.repeat) return;

		switch(currentScreen.id){
			case 'welcomeScreen':
				switchScreens( settingsScreen )

				// Used setTimeOut() here because otherwise the event below would trigger before settings-screen was loaded
				setTimeout(() => document.addEventListener('click', changeNbOfPlayers), 500);

				// We call clearFlowEvents() each time to remove the previous handlers that take the user to the next screen, so that they don't stack
				clearFlowEvents();
				// We call flowEvents() each time to get new currentScreen and nextButton once the new screen is loaded
				flowEvents();
				break;

			case 'settingsScreen':
				getNbOfRounds();
				switchScreens( namesScreen, [+nbOfPlayers.textContent] )
				document.removeEventListener('click', changeNbOfPlayers);

				clearFlowEvents();
				flowEvents();
				break;

			case 'namesScreen':
				// If form is not filled, getPlayersData returns false
				if(!getPlayersData()){
					break;
				}
				getToken();

				switchScreens( pickScreen, [currentRound, player]);
				document.addEventListener('click', searchSpotify);

				clearFlowEvents();
				flowEvents();
				break;

			case 'pickScreen':
				let songData = {
					songId: songId,
					player: player,
				};
				songsDataList.push(songData);
				player++;

				if(player == totalOfPlayers){			// => all players have taken their turns: next screen
					player = 0;					
					switchScreens( quizScreen, [player]);
					
					document.removeEventListener('click', searchSpotify);
					document.addEventListener('click', selectOption);
				}
				else switchScreens( pickScreen, [currentRound, player]);

				clearFlowEvents();
				flowEvents();
				break;

				case 'quizScreen':
					let options = document.querySelectorAll('input');
					let playerHasChosen = false;

					for(let choice of options){
						if(choice.checked == true){
							playerHasChosen = true;
							if(choice.id == selected.player) playersData[player].score += 1;
							break;
						}
					}

					// Edge-case: player clicks nextButton but has not picked an option
					if(!playerHasChosen) {
						// Insert error text to notify player, then exit switch case
						let errorTxtExists = document.getElementById('errorText');
						if(!errorTxtExists){
							let errorTxt = document.createElement('p');
							errorTxt.id = 'errorText';
							errorTxt.classList.add('text-red-600', 'self-center');
							errorTxt.textContent = "You have not chosen a player !";
							nextButton.insertAdjacentElement('beforebegin', errorTxt);
						}
						break;
					}

					player++; // next player's turn

					// All players have taken their turns: move to scores screeen
					if(player == totalOfPlayers){
						player = 0;
						songsDataList.length = 0;

						// All rounds have been played
						if(currentRound == numberOfRounds) switchScreens( scoresScreen, ['FINAL SCORES', 'play again!']);
						// There are rounds remaining
						else switchScreens( scoresScreen, ['CURRENT SCORES', 'next round']);

						document.removeEventListener('click', selectOption);			
					}

					else switchScreens( quizScreen, [player]);

					clearFlowEvents();
					flowEvents();
					break;
				
				case 'scoresScreen':
					if(currentRound == numberOfRounds){
						playersData.length = 0;
						currentRound = 1;

						switchScreens( settingsScreen );

						setTimeout(() => document.addEventListener('click', changeNbOfPlayers), 500);
					}

					else{
						currentRound++;

						switchScreens( pickScreen, [currentRound, player]);
	
						document.addEventListener('click', searchSpotify);
					}
					
					clearFlowEvents();
					flowEvents();
					break;
		}
	}

	function previousScreen(){

		switch (currentScreen.id){
			case 'settingsScreen':
				switchScreens( welcomeScreen );

				document.removeEventListener('click', changeNbOfPlayers);

				clearFlowEvents();
				flowEvents();
				break;
			
			case 'namesScreen':
				switchScreens( settingsScreen );

				setTimeout(() => document.addEventListener('click', changeNbOfPlayers), 500);

				clearFlowEvents();
				flowEvents();
				break;
		}
	}

	function clearFlowEvents(){
		nextButton.removeEventListener('click', nextScreen);
		document.removeEventListener('keydown', nextScreen);
	}

	function switchScreens(add, options){
		if(options) appContainer.appendChild( add(...options) );
		else appContainer.appendChild( add() );
		appContainer.removeChild( currentScreen );
	}
}