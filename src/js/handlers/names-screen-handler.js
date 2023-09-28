const playersData = [];

let player1 = {
	id: 1,
	name: 'peq',
	score: '2'
};
let player2 = {
	id: 2,
	name: 'sam',
	score: '3'
};
let player3 = {
	id: 3,
	name: 'joe',
	score: '0'
};

playersData.push(player1, player2, player3);

export { playersData };
let totalOfPlayers;
export { totalOfPlayers };

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
	totalOfPlayers = playersData.length;
}
