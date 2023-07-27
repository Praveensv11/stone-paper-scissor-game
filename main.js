var playercount = 0
var computercount = 0

function game(val) {
    var player = document.getElementById('player')
    var computer = document.getElementById('computer')
    var result = document.getElementById('result')
    var result1 = document.getElementById('result1')
    var arr = ['stone', 'paper', 'scissor']
    var comsel = Math.floor(Math.random() * arr.length)

    if (val === arr[comsel]) {
        result.innerHTML = 'Tie'
        result.style.color = 'orange'

    }
    else if ((val === 'stone' && arr[comsel] === 'scissor') || (val === 'scissor' && arr[comsel] === 'paper') || (val === 'paper' && arr[comsel] === 'stone')) {
        playercount = playercount + 1
        result.innerHTML = 'Win'
        result.style.color = 'green'
    }
    else {
        computercount = computercount + 1
        result.innerHTML = 'Lose'
        result.style.color = 'red'
    }

    if (playercount == 10) {
        result1.innerHTML = 'You win the game'
        result1.style.color = 'green'
    } else if (computercount == 10) {
        result1.innerHTML = 'You lose the game'
        result1.style.color = 'red'
    }

    if (playercount > 10 || computercount > 10) {
        playercount = 0
        computercount = 0
        computer.innerHTML = ''
        player.innerHTML = ""
        result1.innerHTML = ''
        result.innerHTML = ''
    }


    computer.innerHTML = computercount + '  ' + " Computer: " + arr[comsel]
    player.innerHTML = playercount + '   ' + "Player: " + val


}

function reset() {
    playercount = 0
    computercount = 0
    computer.innerHTML = computercount + '  ' + " Computer : "
    player.innerHTML = playercount + '   ' + "Player : "
    result.innerHTML = ''
    result1.innerHTML = ''
}
