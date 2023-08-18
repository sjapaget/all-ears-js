
let playersData = [];
export { playersData };

//import './flow-handler';

export function startTheGame(){
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
	alert(playersData[1].name);
}
