import '../styles/index.css'
import { playersScreen } from './screens/players-screen';
import welcomeScreen from './screens/welcome-screen.js'

const appContainer = document.querySelector('#app')

const appContainerClasses = [
  'container',
  'min-h-screen',
  'flex',
  'justify-center'
];

appContainer.classList.add(...appContainerClasses);

appContainer.appendChild( playersScreen() );
