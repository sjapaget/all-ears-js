import {
    createContainer,
    createTitle,
    createButton,
		createForm,
} from '../helpers/elementCreatorHelper';


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

	const names = createForm("names", nbOfPlayers);

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