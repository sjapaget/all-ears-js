const playersData = [];
export { playersData };

export function getPlayersData(){
	const namesList = document.getElementById('names');

	for(let name of namesList.children){
		let player = {
			id: name.id,
			name: name.value,
			score: 0
		};
		playersData.push(player);
	}
}
