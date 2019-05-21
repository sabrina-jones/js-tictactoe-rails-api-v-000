$(document).ready(function() {
   attachListeners()
});


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

function attachListeners(){

  $(document).on('keydown', function(key) {
    //console.log(key.which)
    //debugger
  if(key.which == 83){
      alert('s was pressed');
  }
});


}
