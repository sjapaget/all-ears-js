/**
 * A series of functions to assist in creating DOM elements
 *
 * Add more as needed & make sure to list them here :
 *
 * - createTitle
 * - createContainer
 * - createButton
 * - createSettingsBanner
 * - createForm
 * - createSearchBar
 * - createIFrame
 * - createPlayerchoice
 * - createField
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
 *  @key {String} (optional) textContent The textContent for the container if given. Defaults to none.
 *  @key {String} id The container's id
 *  @key {Array} classes The tailwind classes to be applied to the element
 *
 * @returns {DOM element} container The container element
 */
export function createContainer(args) {
  const {
    containerType = 'div',
    textContent = '',
    id = 'Please provide an ID for the container',
    classes = [],
  } = args;

  const container = document.createElement(containerType);
  container.classList.add(...classes);
  container.textContent = textContent;
  container.id = id;

  return container;
};

/**
 * Create a button
 * @param {Object} args An object containing the options for creating the button
 * Accepted keys are :
 *  @key {String} btnText The text to show in the button (defaults to none)
 *  @key {String} btnId The button's ID
 *  @key {Boolean} btnImg Specify true to insert an img in the button
 *  @key {String} btnImgSrc The button's img source
 *  @key {Array} classes The tailwind classes to be applied to the button
 *
 * @returns {DOM element} btn The button element
 */
export function createButton(args) {
  const {
    btnText = '',
    btnId = 'Please provide a value for the btnId key',
    btnImg = false,
    btnImgSrc = '',
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

  if(btnImg){
    const buttonImage = document.createElement('img');
    buttonImage.src = btnImgSrc;
    btn.append(buttonImage);
  }

  return btn;
}

/**
 * Create a banner with +/- options
 * @param {String} min The minimum amount for the setting
 * @param {String} id The id for the div element displaying the amount
 * 
 * @returns {DOM element} banner The banner 'span' element, containing +/- buttons and div displaying the amount
 */
export function createSettingsBanner(min, id){
  
  const minusBtn = createButton({
    btnText: '-',
    btnId: 'remove',
  });

  const plusBtn = createButton({
    btnText: '+',
    btnId: 'add',
  });
  
  const count = createContainer({
    id: id,
    textContent: min,
    classes: [
    'text-xl',
    'text-center',
    'h-full',
    'leading-[3]',
  ]
  });

  const banner = document.createElement('span');

  const bannerClasses = [
    'inline-flex',
    'justify-evenly',
    'mb-4',
  ];

  banner.classList.add(...bannerClasses);
  banner.append(
    minusBtn,
    count,
    plusBtn
  );

  return banner;
}

/**
 * Create a form
 * @param {String} id The id for the form element
 * @param {Integer} fields The number of 'input' elements in the form
 * 
 * @returns {DOM element} form The form element
 */

export function createForm(id, fields){
  const form = createContainer({
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
  
  const fieldClasses = [
    'p-2',
    'm-2',
    'border-solid',
    'border-2',
    'rounded',
  ];

  for(let i = 1; i <= fields; i++){
    const field = document.createElement('input');
    field.id = i;
    field.classList.add(...fieldClasses);
    form.append(field);
  }

  return form;
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

  const trackField = createField('trackField', 'song');
  const artistField = createField('artistField', 'artist (optional)');
  const albumField = createField('albumField', 'album (optional)');

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


export function createScoresBoard(playersData){
  const container = createContainer({
    id: 'scoresBoard',
    classes: [
      'grid',
      'grid-cols-2',
      'border-2',
      'border-black',
      'gap-0.5',
      'bg-black',
    ]
  });

  const col1 = createTitle({
    titleText: 'PLAYER',
    classes: [
      'bg-white',
      'w-full',
      'h-full',
      'text-center',
    ],
  });
  const col2 = createTitle({
    titleText: 'SCORE',
    classes: [
      'bg-white',
      'w-full',
      'h-full',
      'text-center',
    ],
  });

  container.append(col1, col2);

  const sorted = playersData.sort((a, b) => (b.score - a.score));

  for(let player of sorted){
    const name = document.createElement('p');
    name.textContent = player.name;
    name.classList.add(
      'bg-white',
      'w-full',
      'h-full',
      'text-center',
    );

    const score = document.createElement('p');
    score.textContent = player.score;
    score.classList.add(
      'bg-white',
      'w-full',
      'h-full',
      'text-center',
    );

    container.append(name, score);
  }

  return container;
}


function createField(id, placeholder){
  const field = document.createElement('input');
  field.type = "search";
  field.id = id;
  field.placeholder = placeholder;
  
  const classes = [
    'h-8',
    'self-center',
    'border-solid',
    'border-2',
    'm-2',
  ];
  field.classList.add(...classes);

  return field;    
}