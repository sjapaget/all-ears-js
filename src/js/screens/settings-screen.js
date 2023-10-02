import {
    createContainer,
    createTitle,
    createButton,
    createSettingsBanner,
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
      'text-6xl',
      'mb-8',
      'mx-16',
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

  const nbOfPlayers = createSettingsBanner(3, 'nbOfPlayers');
  const nbOfRounds = createSettingsBanner(3, 'nbOfRounds');

  const returnButton = createButton({
    btnId: 'returnButton',
    btnImg: true,
    btnImgSrc: 'src/images/return-button.png',
    classes: [
      'p-0',
      'w-max',
      'border-none',
      'mb-6',
    ]
  });

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
    returnButton,
    startTitle,
    playersTitle,
    nbOfPlayers,
    roundsTitle,
    nbOfRounds,
    nextButton,
    );

  return container;

}