import '../styles/index.css'
import playersScreen from './screens/players-screen';
import namesScreen from './screens/names-screen';

const appContainer = document.querySelector('#app')

const appContainerClasses = [
  'container',
  'min-h-screen',
  'flex',
  'justify-center'
];

appContainer.classList.add(...appContainerClasses);

appContainer.appendChild( playersScreen() );
