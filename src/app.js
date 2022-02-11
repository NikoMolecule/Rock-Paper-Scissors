const resetBtn = document.getElementById('reset-btn')
const scores = document.getElementById('scoreboard')
const choices = document.querySelectorAll('.choise')
const result = document.getElementById('result')
const modal = document.querySelector('.modal')
const scoreboard = {
    Player: 0,
    Ties: 0,
    Computer: 0
}

function launchGame(item){
    resetBtn.style.display = 'inline-block'
    const playerMove = item.target.id
    const computerMove = compMove()
    const winner = determineWinner(playerMove, computerMove)
    showWinner(winner, computerMove)
}

function compMove() {
    const possibleMoves = ["rock", "paper", "scissors"]
    let choosenMove = Math.floor(Math.random() * possibleMoves.length)
    return possibleMoves[choosenMove]
}

function determineWinner(player, bot){
    if(player === bot){
        return "draw"
    } else if (player === 'rock'){
        if(bot === 'scissors'){
            return "player"
        } else {
            return "computer"
        }
    } else if (player === 'paper'){
        if (bot === 'rock'){
            return "player"
        } else {
            return "computer"
        }
    } else if(player === 'scissors'){
        if(bot === 'paper'){
            return "player"
        } else {
            return "computer"
        }
    }
}

function showWinner(winner, computerMove){
    if(winner === 'player'){
        scoreboard.Player++;
        result.innerHTML= `<h1 class = "win-win">You Win!</h1>
        <i class="fas fa-hand-${computerMove} fa-10x"></i>
        <p>Computer Chose <strong>${computerMove.charAt(0).toUpperCase() + computerMove.slice(1)}</strong></p>`
    } else if(winner === 'computer'){
        scoreboard.Computer++;
        result.innerHTML= `<h1 class = "lose-lose">You Lose!</h1>
        <i class="fas fa-hand-${computerMove} fa-10x"></i>
        <p>Computer Chose <strong>${computerMove.charAt(0).toUpperCase() + computerMove.slice(1)}</strong></p>`
    } else if(winner === 'draw'){
        scoreboard.Ties++;
        result.innerHTML= `<h1 class = "draw-draw">It's a Draw!</h1>
        <i class="fas fa-hand-${computerMove} fa-10x"></i>
        <p>Computer Chose <strong>${computerMove.charAt(0).toUpperCase() + computerMove.slice(1)}</strong></p>`
    }

    scores.innerHTML = `<p>Player: ${scoreboard.Player}</p>
    <p>Ties: ${scoreboard.Ties}</p>
    <p>Computer: ${scoreboard.Computer}</p>`

    modal.style.display = 'block'
}

function closeModal(MandMs){
    if(MandMs.target == modal){
        modal.style.display = 'none'
    }
}

function resetStats(){
    scoreboard.Player = 0
    scoreboard.Computer = 0
    scoreboard.Ties = 0
    scores.innerHTML = `<p>Player: 0</p>
    <p>Ties: 0</p>
    <p>Computer: 0</p>`
}

choices.forEach(a => a.addEventListener('click', launchGame))
window.addEventListener('click', closeModal)
resetBtn.addEventListener('click', resetStats)