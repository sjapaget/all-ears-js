import '../styles/index.css'
import welcomeScreen from './screens/welcome-screen';
import scoresScreen from './screens/scores-screen';

import { flowEvents } from './handlers/flow-handler';
import { playersData } from './handlers/names-screen-handler';

const appContainer = document.querySelector('#app')

const appContainerClasses = [
  'container',
  'min-h-screen',
  'flex',
  'justify-center'
];

appContainer.classList.add(...appContainerClasses);

appContainer.appendChild( scoresScreen(playersData) );
flowEvents();
