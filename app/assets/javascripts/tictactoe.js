$(document).ready(function() {
   attachListeners()
});

let WINNING_COMBOS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

let currentGame = 0
let turn = 0

function player(){
  //Returns 'X' when the turn variable is even and 'O' when it is odd
   if (turn%2 === 0){
     return "X"
   }
   else{
     return "O"
   }
}

function updateState(square){
//Invokes player() and adds the returned string ('X' or 'O') to the clicked square on the game board.
  let player_turn = player()
  $(square).text(player_turn)
}

function setMessage(string) {
    $('#message').text(string)
}

function checkWinner() {
  let board = []
  let winner = false

  $('td').text(function(index, td){
  	board[index] = td
  })

  WINNING_COMBOS.forEach(function(combo) {
    if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      setMessage(`Player ${board[combo[0]]} Won!`)
      winner = true
    }
  })
  return winner
}

function doTurn(square) {

  updateState(square)
  turn++

  if (checkWinner()) {
    saveGame()
    resetBoard()
  } else if (turn === 9){
    setMessage("Tie game.")
    saveGame()
    resetBoard()
  }
}

function resetBoard(){
  turn = 0;
  $('td').empty();
  currentGame = 0;
}

function attachListeners(){

  //$('td').on('click', function() {

    //debugger
  //if(key.which == 83){
    //  alert('s was pressed');
  //}
//});
  $('td').click(function(){
    console.log(this)
    if (!$.text(this) && !checkWinner()) {
        doTurn(this)
      }
    })

  $('#previous').click(function(){
    previousGames()
  });

  $('#save').click(function(){
    saveGame()
  });

  $('#clear').click(function(){
    resetBoard()
  });



}
