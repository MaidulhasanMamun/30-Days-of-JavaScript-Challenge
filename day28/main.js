const form = document.querySelector('.form');
const wrapper = document.querySelector('.players-wrapper');
const firstNameInput = document.querySelector('.first-name__input');
const lastNameInput = document.querySelector('.last-name__input');
const scoreInput = document.querySelector('.score-input');
const addPlayerBtn = document.querySelector('.add-player__btn');
const warning = document.querySelector('.warning');


form.addEventListener('submit', (e) => {
    e.preventDefault();
})

const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() +1;
    let currentYear = date.getFullYear();
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
    let fullDate =`${day}/${month}/${currentYear} ${currentHour}:${currentMinutes}`;


const players = [

    {
        firstName: 'Desalegn',
        lastName: 'Yetayeh',
        date: fullDate,
        score: 70,
        
    },
    {
        firstName: 'Lidiya',
        lastName: 'Tekle',
        date: fullDate,
        score: 50,
        
    },
    {
        firstName: 'Getaneh',
        lastName: 'Yetayeh',
        date: fullDate,
        score: 65,
        
    },
    {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        date: fullDate,
        score: 85,
        
    }
    
]

console.log(players)

const createNode = (e) => {
    return document.createElement(e);
}


const sortPlayersByScore = () => {
    players.sort((a, b) => {
        if(a.score > b.score) return -1;
        if(a.score < b.score) return 1;
        return 0
        
    })
}

 addPlayerBtn.addEventListener('click', addPlayer = () => {
    if(!firstNameInput.value.match(/[0-9]*$/) || !lastNameInput.value.match(/[0-9]*$/)) {
        warning.textContent = 'Please fill both inputs';
        warning.style.color = 'red';

    } else if (scoreInput.value < 1){ 
        warning.textContent = 'Please input a score';
        warning.style.color = 'red';

    }  else {
        
        players.push({
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            date: fullDate,
            score: scoreInput.value
    
        })
        console.log(players)
        displayPlayers();
    }

   
 

})


const displayPlayers = () => {
    wrapper.textContent = '';
    sortPlayersByScore();
    for(const player of players) {

        let playerContainer = createNode('div');
        playerContainer.setAttribute('class', 'player-container');
        let {firstName, lastName, date, score} = player;
        let playerDetails = createNode('div')
        let playerFirstName = createNode('p');
        let playerLastName = createNode('p');
        let playerDate = createNode('p');
        let playerScore = createNode('p');

        let deleteAddScoresContainer = createNode('div');
        let deleteIconBtn = createNode('i');
        let increaseScoreBtn = createNode('button');
        let decreaseScoreBtn = createNode('button');
        deleteIconBtn.setAttribute('class', 'fas fa-trash-alt'); 
        playerFirstName.textContent = firstName;
        playerLastName.textContent = lastName;
        playerDate.textContent = date;
        playerScore.textContent = score;

        increaseScoreBtn.textContent = '+5';
        decreaseScoreBtn.textContent = '-5';
        increaseScoreBtn.setAttribute('class', 'btn-score');
        decreaseScoreBtn.setAttribute('class', 'btn-score');
        deleteAddScoresContainer.setAttribute('class', 'delete-add-remove');

        playerDetails.append(playerFirstName, playerLastName, playerDate);
        deleteAddScoresContainer.append(deleteIconBtn, increaseScoreBtn, decreaseScoreBtn);
        playerContainer.append(playerDetails, playerScore, deleteAddScoresContainer);
        wrapper.append(playerContainer);

        increaseScoreBtn.addEventListener('click', () => addScore(player));
        decreaseScoreBtn.addEventListener('click', () => decreaseScore(player));
        deleteIconBtn.addEventListener('click', () => removePlayer(player)); 
        

    }
  


}

const removePlayer = (player, index) => {

    index = players.indexOf(player);
    if (index !== -1) {
        players.splice(index, 1);

    }
    displayPlayers()
    
    console.log(players)
}

const addScore = (player, index) => {
    index = players.indexOf(player);
    if (index !== -1) {
        players[index].score += 5;

    }
    console.log(players);
    displayPlayers()
 
}

const decreaseScore = (player, index) => {
    index = players.indexOf(player);
    if (index !== -1) {
        players[index].score -= 5;

    }
    console.log(players);
    displayPlayers()
 
}


displayPlayers()


