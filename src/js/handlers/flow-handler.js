import namesScreen from "../screens/names-screen";
import playersScreen from "../screens/settings-screen";
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

	if(nextButton) nextButton.addEventListener('click', nextScreen);

	function nextScreen(){

		switch(currentScreen.id){
			case 'welcomeScreen':
				appContainer.appendChild( playersScreen() );
				appContainer.removeChild( currentScreen );				

				// Used setTimeOut() here because otherwise the event below would trigger before settings-screen was loaded
				setTimeout(() => document.addEventListener('click', changeNbOfPlayers), 500);

				// We call flowEvents() each time to get new currentScreen and nextButton once the new screen is loaded
				flowEvents();
				break;

			case 'playersScreen':
				getNbOfRounds();

				appContainer.appendChild( namesScreen(+nbOfPlayers.textContent) );
				appContainer.removeChild( currentScreen );

				document.removeEventListener('click', changeNbOfPlayers);

				flowEvents();
				break;

			case 'namesScreen':
				getPlayersData();
				getToken();

				appContainer.appendChild( pickScreen(currentRound, player) );
				appContainer.removeChild( currentScreen );

				document.addEventListener('click', searchSpotify);

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

					appContainer.appendChild( quizScreen(player) );
					appContainer.removeChild( currentScreen );
					
					document.removeEventListener('click', searchSpotify);
					document.addEventListener('click', selectOption);
				}

				else{
					appContainer.appendChild( pickScreen(currentRound, player) );
					appContainer.removeChild( currentScreen );
				}

				flowEvents();
				break;

				case 'quizScreen':
					let options = document.querySelectorAll('input');
					for(let choice of options){
						if(choice.checked == true){
							if(choice.id == selected.player) playersData[player].score += 1;
							break;
						}
					}

					player++;

					if(player == totalOfPlayers){			// => all players have taken their turns: next screen
						player = 0;
						songsDataList.length = 0;

						if(currentRound == numberOfRounds){
							appContainer.appendChild( scoresScreen('FINAL SCORES', 'play again!') );
							appContainer.removeChild( currentScreen );	
						}

						else{
							appContainer.appendChild( scoresScreen('CURRENT SCORES', 'next round') );
							appContainer.removeChild( currentScreen );
						}

						document.removeEventListener('click', selectOption);
						
					}

					else{
						appContainer.appendChild( quizScreen(player) );
						appContainer.removeChild( currentScreen );
					}

					flowEvents();
					break;
				
				case 'scoresScreen':
					if(currentRound == numberOfRounds){
						playersData.length = 0;
						currentRound = 1;

						appContainer.appendChild( playersScreen() );
						appContainer.removeChild( currentScreen );

						setTimeout(() => document.addEventListener('click', changeNbOfPlayers), 500);
					}

					else{
						currentRound++;

						appContainer.appendChild( pickScreen(currentRound, player) );
						appContainer.removeChild( currentScreen );
	
						document.addEventListener('click', searchSpotify);
					}
					
					flowEvents();
					break;
		}
	}
}