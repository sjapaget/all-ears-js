document.addEventListener('load', namesEvents);


let playersData = [];
export { playersData };

//import './flow-handler';

export function namesEvents(){

	const next = document.getElementById('next');

	next.addEventListener('click', startTheGame);

	function startTheGame(){
		const namesList = document.getElementById('names');

		for(let name of namesList.children){
			let player = {
				id: name.id,
				name: name.textContent,
				score: 0
			};
			playersData.push(player);
		}

		alert(playersData[0].name);

		document.removeEventListener('load', namesEvents);
		next.removeEventListener('click', startTheGame);
	}
}