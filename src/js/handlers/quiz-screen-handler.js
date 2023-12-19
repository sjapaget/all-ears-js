export function selectOption(event){
  if(!event.target.id.startsWith('option')) return;
  event.target.firstElementChild.checked = true;
}