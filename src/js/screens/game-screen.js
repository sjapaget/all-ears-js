import {
  createContainer,
  createTitle,
  createButton
} from '../helpers/elementCreatorHelper';
  
export default function gameScreen() {
  
  const container = createContainer({
    containerType: 'main',
    id: 'gameScreen',
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
    titleText: 'Round 1',
    classes: [
      'text-center',
      'text-4xl',
      'mb-8'
    ]
  });
  
  const subTitle = createTitle({
    titleText: "Under development",
    titleType: 'h2',
    classes: [
      'text-center',
      'text-2xl',
      'mb-8'
    ]
  });
  
  const nextBtn = createButton({
    btnText: 'Next round',
    btnId: 'next',
    classes: [
      'mt-4',
      'text-xl',
      'hover:bg-violet-600',
      'ease-in',
      'duration-200'
    ]
  });
  
  container.append(
    mainTitle,
    subTitle,
    nextBtn
  );

  return container;
}