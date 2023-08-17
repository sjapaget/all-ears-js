import {
    createContainer,
    createTitle,
    createButton,
		createNames,
} from '../helpers/elementCreatorHelper';

import '../handlers/names-screen-handler';


export default function namesScreen(nbOfPlayers){

	const container = createContainer({
    containerType: 'main',
		id: 'namesScreen',
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
    titleText: "Provide players' names",
    classes: [
      'text-center',
      'text-4xl',
      'mb-8'
    ]
  });

	const names = createNames(nbOfPlayers);

	const nextButton = createButton({
    btnText: "Let's go !",
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
		mainTitle,
		names,
		nextButton,
	);

	return container;
}