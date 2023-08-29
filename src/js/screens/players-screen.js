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
    titleText: 'How many players ?',
    classes: [
      'text-center',
      'text-4xl',
      'mb-8'
    ]
  });

  const headband = createNbOfPlayers(3);

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
    headband,
    nextButton,
    );

  return container;

}