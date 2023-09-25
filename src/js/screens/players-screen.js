import {
    createContainer,
    createTitle,
    createButton,
    createNbOfPlayers,
} from '../helpers/elementCreatorHelper';


export default function playersScreen(){
  
  const container = createContainer({
    containerType: 'main',
    id: 'playersScreen',
    classes: [
      'p-8',
      'm-8',
      'border-solid',
      'border-2',
      'rounded',
      'flex',
      'flex-col',
      'justify-center'
    ]
  });

  const startTitle = createTitle({
    titleText: 'Settings',
    classes: [
      'text-center',
      'text-4xl',
      'mb-8'
    ]
  });

  const playersTitle = createTitle({
    titleText: 'How many players ?',
    titleType: 'h2',
    classes: [
      'text-center',
      'text-3xl',
      'my-8'
    ]
  });

  const roundsTitle = createTitle({
    titleText: 'How many rounds ?',
    titleType: 'h2',
    classes: [
      'text-center',
      'text-3xl',
      'my-8'
    ]
  });

  const nbOfPlayers = createNbOfPlayers(3, 'nbOfPlayers');
  const nbOfRounds = createNbOfPlayers(3, 'nbOfRounds');

  const nextButton = createButton({
    btnText: 'next',
    btnId: 'next',
    classes: [
      'mt-8',
      'text-xl',
      'hover:bg-violet-600',
      'ease-in',
      'duration-200'
    ]
  });

  container.append(
    startTitle,
    playersTitle,
    nbOfPlayers,
    roundsTitle,
    nbOfRounds,
    nextButton,
    );

  return container;

}