import {
    createContainer,
    createTitle,
    createButton,
    createScoresBoard,
} from "../helpers/elementCreatorHelper";

import { playersData } from "../handlers/names-screen-handler";


export default function scoresScreen(){
    const container = createContainer({
        containerType: 'main',
        id: 'scoresScreen',
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

      const title = createTitle({
        titleText: 'SCORE BOARD',
        classes: [
            'text-center',
            'text-4xl',
            'mb-8'
          ]
      });

      const board = createScoresBoard(playersData)

      container.append(
        title,
        board,
      );

      return container;
}