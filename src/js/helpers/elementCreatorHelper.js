/**
 * A series of functions to assist in creating DOM elements
 *
 * Add more as needed & make sure to list them here :
 *
 * - createTitle
 * - createContainer
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
 *  @key {Array} classes The tailwind classes to be applied to the element
 *
 * @returns {DOM element} container The container element
 */
export function createContainer(args) {
  const {
    containerType = 'div',
    classes = []
  } = args;

  const container = document.createElement(containerType);
  container.classList.add(...classes);

  return container;
};

/**
 * Create a button
 * @param {Object} args An object containing the options for creating the button
 * Accepted keys are :
 *  @key {String} btnText The text to show in the button
 *  @key {Array} classes The tailwind classes to be applied to the button
 *
 * @returns {DOM element} btn The button element
 */
export function createButton(args) {
  const {
    btnText = 'Please provide a value for the btnText key',
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
  btn.classList.add(...allClasses);

  return btn;
}
