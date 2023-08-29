import '../styles/index.css'
import welcomeScreen from './screens/welcome-screen';

import { flowEvents } from './handlers/flow-handler';

const appContainer = document.querySelector('#app')

const appContainerClasses = [
  'container',
  'min-h-screen',
  'flex',
  'justify-center'
];

appContainer.classList.add(...appContainerClasses);

appContainer.appendChild( welcomeScreen() );
flowEvents();
