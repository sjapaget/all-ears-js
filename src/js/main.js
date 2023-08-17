import '../styles/index.css'
import playersScreen from './screens/players-screen';
import welcomeScreen from './screens/welcome-screen.js'
import namesScreen from './screens/names-screen.js'
import { playersData } from './handlers/names-screen-handler';

const appContainer = document.querySelector('#app')

const appContainerClasses = [
  'container',
  'min-h-screen',
  'flex',
  'justify-center'
];

appContainer.classList.add(...appContainerClasses);

appContainer.appendChild( playersScreen() );
