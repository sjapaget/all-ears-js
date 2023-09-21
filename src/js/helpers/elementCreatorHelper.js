/**
 * A series of functions to assist in creating DOM elements
 *
 * Add more as needed & make sure to list them here :
 *
 * - createTitle
 * - createContainer
 * - createButton
 * - createNbOfPlayers
 * - createForm
 * - createSearchBar
 * - createIFrame
 * - createPlayerchoice
 */


/**
 * Create a h1 title
 * @param {Object} args An object containing the options for creating the title.
 * The accepted keys are :
 *  @key {String} titleText The text of the title
 *  @key {Array} classes The tailwind css classes to be applied to the title elements
 *
 * @return {DOM element} h1 The title
 */
export function createTitle(args) {

  const {
    titleText = 'Please provide a value for the titleText key',
    titleType = 'h1' ,
    classes = []
  } = args;

  const h1 = document.createElement(titleType);
  h1.innerText = titleText;
  h1.classList.add(...classes);

  return h1;
};

/**
 * Create a container
 * @param {Object} args An object containing the options for creating the container.
 * Accepted keys are :
 *  @key {String} containerType The type of container to create, defaults to div
 *  @key {String} id The container's id
 *  @key {Array} classes The tailwind classes to be applied to the element
 *
 * @returns {DOM element} container The container element
 */
export function createContainer(args) {
  const {
    containerType = 'div',
    id = 'Please provide an ID for the container',
    classes = [],
  } = args;

  const container = document.createElement(containerType);
  container.classList.add(...classes);
  container.id = id;

  return container;
};

/**
 * Create a button
 * @param {Object} args An object containing the options for creating the button
 * Accepted keys are :
 *  @key {String} btnText The text to show in the button
 *  @key {String} btnId The button's ID
 *  @key {Array} classes The tailwind classes to be applied to the button
 *
 * @returns {DOM element} btn The button element
 */
export function createButton(args) {
  const {
    btnText = 'Please provide a value for the btnText key',
    btnId = 'Please provide a value for the btnId key',
    classes = []
  } = args;

  // Adding in some default classes
  const allClasses = [
  'rounded-full',
  'border-solid',
  'border-2',
  'p-4',
  ...classes
];
  const btn = document.createElement('button');
  btn.innerText = btnText;
  btn.id = btnId;
  btn.classList.add(...allClasses);

  return btn;
}

/**
 * Create a headband to select the number of players
 * @param {String} arg The minimum number of players
 * 
 * @returns {DOM element} headband The headband 'span' element, containing +/- buttons and displaying the number of players
 */
export function createNbOfPlayers(arg){
  
  const minusBtn = createButton({
    btnText: '-',
    btnId: 'remove',
  });

  const plusBtn = createButton({
    btnText: '+',
    btnId: 'add',
  });
  
  const playersCount = document.createElement('div');
  const countClasses = [
    'text-xl',
    'text-center',
    'h-full',
    'leading-[3]',
  ];
  playersCount.textContent = arg;
  playersCount.id = 'nbOfPlayers';
  playersCount.classList.add(...countClasses);

  const headbandClasses = [
    'inline-flex',
    'justify-evenly',
  ];
  

  const headband = document.createElement('span');

  headband.classList.add(...headbandClasses);
  headband.append(
    minusBtn,
    playersCount,
    plusBtn
  );

  return headband;
}

/**
 * Create a list of inputs for players' names
 * @param {Number} args The number of players
 * 
 * @returns {DOM element} subContainer The list of 'div' editable elements for players' names
 */

// CHANGES:
// -param: add ID param, change 'args' to 'number' or similar
// -change 'player' to 'field' (?) 
// change JSdoc description accordingly

// ATTENTION: make according changes in all files using createNames !!
// + : 'player' to 'field' => causes problems on document.getElementById/querySelector ?
// + : id 'names' => attention on selection !

export function createForm(id, fields){
  const subContainer = createContainer({
    containerType: 'form',
    id: id,
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

  for(let i = 1; i <= fields; i++){

    const field = document.createElement('input');
    field.id = i;

    const classes = [
      'p-2',
      'm-2',
      'border-solid',
      'border-2',
      'rounded',
    ];
    field.classList.add(...classes);

    subContainer.append(field);
  }

  return subContainer;
}

/**
 * Create a search bar with input(type="search") and button
 * @returns {DOM element} searchBar The search bar
 */
export function createSearchBar(){

  const searchBar = createContainer({
    id: 'searchBar',
    classes: [
      'flex',
      'flex-col',
      'justify-center',
      'mb-8',
    ]
  });

// This could be made more DRY...

  const trackField = document.createElement('input');
  const artistField = document.createElement('input');
  const albumField = document.createElement('input');

  trackField.id = "trackField";
  trackField.placeholder = "song";
  artistField.id = "artistField";
  artistField.placeholder = "artist (optional)";
  albumField.id = "albumField";
  albumField.placeholder = "album (optional)";

  const fields = [trackField, artistField, albumField];
  const classes = [
    'h-8',
    'self-center',
    'border-solid',
    'border-2',
    'm-2',
  ];

  for(let field of fields){
    field.type = "search";
    field.classList.add(...classes);
  }

  const searchButton = createButton({
    btnText: 'search',
    btnId: 'searchButton',
    classes: [
      'h-8',
      'self-center',
      '!p-1',
      'ml-1',
      '!rounded',
    ]
  });

  searchBar.append(
    trackField,
    artistField,
    albumField,
    searchButton,
  );

  return searchBar;
}

/**
 * Create an iframe
 * @param {String} songId the Spotify-id of the song to embed
 * 
 * @returns {DOM element} iframe The iframe element
 */
export function createIFrame(songId){
    const iframe = document.createElement('iframe');
    iframe.src = `https://open.spotify.com/embed/track/${songId}`;

    return iframe;
}

/**
 * Create a player choice form (to select which player you think chose the song)
 * Buttons are radio-typed and have label elements
 * They are wrapped in a div wrapper which has an id : "option${i}"
 * @param {Object} playersData the object containing players' data 
 * 
 * @returns {DOM element} form The form to select a player
 */
export function createPlayerChoice(playersData){
  const form = createContainer({
    containerType: 'form',
    id: 'names',
    classes: [
      'p-8',
      'm-8',
      'border-solid',
      'border-2',
      'rounded',
      'max-w-fit',
      'self-center',
    ]
  });

  for(let i = 0; i < playersData.length; i++){
    const wrapper = document.createElement('div');
    wrapper.id = `option${i}`;
    wrapper.classList.add('flex');

    const player = document.createElement('input');
    player.id = i;
    player.type = "radio";
    player.name = "name";

    const label = document.createElement('label');
    label.htmlFor = player.id;
    label.textContent = playersData[i].name;
    label.classList.add('ml-6');

    wrapper.append(
      player, 
      label
    );
    form.appendChild(wrapper);
  }

  return form;
}