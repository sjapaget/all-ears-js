const playersData = [];
export { playersData };
let totalOfPlayers;
export { totalOfPlayers };

export function getPlayersData(){
	const namesList = document.getElementById('names');
	let nameMissing = false;

	for(let name of namesList.children){
		if(!name.value.trim()){
			nameMissing = true;
			name.classList.add('border-red-600');
		}
		else{
			name.classList.remove('border-red-600');
		}
	}

	if(nameMissing) return false;

	for(let name of namesList.children){
		let player = {
			id: name.id,
			name: name.value,
			score: 0
		};
		playersData.push(player);
	}
	totalOfPlayers = playersData.length;
	return true;
}
