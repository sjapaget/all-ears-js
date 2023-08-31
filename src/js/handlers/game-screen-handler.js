import { currentScreen } from "./flow-handler";
import { 
  createIFrame,
  createButton,
} from "../helpers/elementCreatorHelper";
import { flowEvents } from "./flow-handler";

let token = '';

export async function getToken(){

  let url = 'https://accounts.spotify.com/api/token'
  let response = await fetch(url, {
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=e226406664d14d5b9193a1243baf0038&client_secret=82fe03ec28794644a4ae46f0c415f8d9',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
    
  response = await response.json();
    
  token = response.access_token;
}


export async function searchSpotify(event){
  if(event.target.id != 'searchButton') return;

  const songname = encodeURIComponent(document.getElementById('searchField').value);

	let api = `https://api.spotify.com/v1/search?q=${songname}&type=track`
	let songSearch = await fetch(api, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
	});
	let json = await songSearch.json();
	let songId = json.tracks.items[0].id;

  let iframe = document.querySelector('iframe');
  
  if(iframe){
    currentScreen.removeChild(iframe);

    let button = document.getElementById('next');
    currentScreen.removeChild(button);
  }

  const nextButton = createButton({
    btnText: 'add',
    btnId: 'next',
    classes: [
      'mt-8',
      'text-xl',
      'hover:bg-violet-600',
      'ease-in',
      'duration-200'
    ]
  });

  currentScreen.appendChild( createIFrame(songId) );
  currentScreen.appendChild( nextButton );
  
  flowEvents();
}