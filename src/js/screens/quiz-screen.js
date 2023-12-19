import { 
	createContainer,
	createTitle,
	createIFrame,
	createPlayerChoice,
	createButton,
} from "../helpers/elementCreatorHelper";
import { playersData } from "../handlers/names-screen-handler";
import { songsDataList } from "../handlers/flow-handler";

let selected;
export { selected };

export function quizScreen(player){

	const container = createContainer({
    containerType: 'main',
    id: 'quizScreen',
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
    titleText: `${playersData[player].name} : who picked this song ?`,
    classes: [
      'text-center',
      'text-4xl',
      'mb-8'
    ]
  });

	const options = createPlayerChoice(playersData);

	selected = selectSong(player);

	const iframe = createIFrame( selected.songId );

	const nextButton = createButton({
    btnText: 'confirm',
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
		iframe,
		options,
		nextButton,
  );

  return container;
}


function selectSong(player){
	let n = Math.floor(Math.random() * (playersData.length));
	while(n == player){
		n = Math.floor(Math.random() * (playersData.length));
	}

	let selected = {
		player: n,
		songId: songsDataList[n].songId
	}
	return selected;
}
