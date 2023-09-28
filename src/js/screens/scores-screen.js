import {
    createContainer,
    createTitle,
    createButton,
    createScoresBoard,
} from "../helpers/elementCreatorHelper";

import { playersData } from "../handlers/names-screen-handler";


export default function scoresScreen(titleText, nextButtonText){
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
        titleText: titleText,
        classes: [
            'text-center',
            'text-4xl',
            'mb-8'
          ]
      });

      const board = createScoresBoard(playersData);

      const nextButton = createButton({
        btnText: nextButtonText,
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
        title,
        board,
        nextButton,
      );

      return container;
}