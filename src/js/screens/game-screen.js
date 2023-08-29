import {
  createContainer,
  createTitle,
  createButton,
  createSearchBar,
} from '../helpers/elementCreatorHelper';

import { playersData } from '../handlers/names-screen-handler';
  
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
    titleText: `${playersData[0].name} : pick a song !`,
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