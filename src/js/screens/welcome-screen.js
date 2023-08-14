import {
  createContainer,
  createTitle,
  createButton
} from '../helpers/elementCreatorHelper';

export default function welcomeScreen() {

  const container = createContainer({
    containerType: 'main',
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

  const mainTitle = createTitle({
    titleText: 'All Ears',
    classes: [
      'text-center',
      'text-4xl',
      'mb-8'
    ]
  })

  const subTitle = createTitle({
    titleText: "How well do you know your friends' tastes in music?",
    titleType: 'h2',
    classes: [
      'text-center',
      'text-2xl',
      'mb-8'
    ]
  });

  const startBtn = createButton({
    btnText: 'Start the Game',
    classes: [
      'mt-4',
      'text-xl',
      'hover:bg-violet-600',
      'ease-in',
      'duration-200'
    ]
  })

  container.append(
    mainTitle,
    subTitle,
    startBtn
  );

  return container;
}
