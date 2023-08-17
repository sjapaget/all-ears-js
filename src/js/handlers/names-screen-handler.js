document.addEventListener('load', events);

let playersData = [];
export { playersData };

function events(){

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

		document.removeEventListener('load', events);
		next.removeEventListener('click', startTheGame);
	}
}