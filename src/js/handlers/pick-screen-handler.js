import { createButton } from "../helpers/elementCreatorHelper";

import { 
  flowEvents,
  currentScreen,
} from "./flow-handler";


const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;


let token = '';
let songId;
export { songId };

export async function getToken(){
  let url = 'https://accounts.spotify.com/api/token'
  let response = await fetch(url, {
    method: 'POST',
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
    
  response = await response.json();
    
  token = response.access_token;
}


export async function searchSpotify(event){
  if(event.target.id != 'searchButton') return;

  let track = encodeURIComponent(document.getElementById('trackField').value);
  let artist = document.getElementById('artistField').value;
  let album = document.getElementById('albumField').value;

  if(!track){
    return;
  }
  
  if(artist){
    artist = "artist:" + encodeURIComponent(artist);
  }
  if(album){
    album = "album:" + encodeURIComponent(album);
  }

	let api = `https://api.spotify.com/v1/search?q=track:${(track)}%20${artist}%20${album}&type=track`;

	let songSearch = await fetch(api, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
	});
	let json = await songSearch.json();
	songId = json.tracks.items[0].id;

  let albumName = json.tracks.items[0].album.name;
  let artistName = json.tracks.items[0].artists[0].name;
  let trackName = json.tracks.items[0].name;

  let currentSearchResult = document.querySelector('#searchResult');
  
  if(currentSearchResult){
    currentScreen.removeChild(currentSearchResult);

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


  let searchResult = document.createElement('div');
  searchResult.id = "searchResult";
  searchResult.textContent = `${artistName} - ${trackName} (${albumName})`

  currentScreen.appendChild( searchResult );
  currentScreen.appendChild( nextButton );

  flowEvents();
}