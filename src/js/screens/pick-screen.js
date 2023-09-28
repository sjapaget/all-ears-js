import {
  createContainer,
  createTitle,
  createSearchBar,
} from '../helpers/elementCreatorHelper';

import { playersData } from '../handlers/names-screen-handler';
  
export default function pickScreen(player) {
  
  const container = createContainer({
    containerType: 'main',
    id: 'pickScreen',
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
    titleText: `${playersData[player].name} : pick a song !`,
    titleType: 'h2',
    classes: [
      'text-center',
      'text-2xl',
      'mb-8'
    ]
  });
  
  const searchBar = createSearchBar();
  
  container.append(
    mainTitle,
    subTitle,
    searchBar
  );

  return container;
}