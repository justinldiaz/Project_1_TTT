// OOP Tic Tac Toe boilerplate codewindow.addEventListener('load', function() {
// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`
  $(document).on("ready", function(){

  var board = $('.box');
  var squares = $('.square p');
  var squareBorders = $('.square');
  var reset = $('.reset');
  var playCount = 0;
  var turn = 0;
  var x = "url('img/x.png')";
  var o = "url('img/o.jpeg')";

  function Game(){
    this.init();
    //Create a new instance of player 1
    //this.player1 = ...
  }
    //Do the same for a player 2
    //this.player2 = ...
    Game.prototype.init = function() {
      console.log("made it to init");
    this.board = new Board();
  
    };
    //Create the board
 function Board() {
    console.log("made it to board");
    // this.$cells = (".box")
    // this.$cells = $(".box").click(function(){
    board.click(function(){
      if (event.target.classList.contains("clickedO") === false || ("clickedX") === false){
        if (turn % 2 === 0) {
          event.target.style.backgroundImage = x;
          event.target.classList.add("clickedX");
          $('.clickedX').off();
        }
        if(turn % 2 === 1){
          event.target.style.backgroundImage = o;
          event.target.classList.add("clickedO");
          $('.clickedX').off();
        }
        turn += 1;
      }
    });
  }

    
    Game.prototype.winnerIs = function winnerIs(player) {
      return allThree(player, "#box1", "#box2", "#box3") ||
             allThree(player, "#box4", "#box5", "#box6") ||
             allThree(player, "#box7", "#box8", "#box9") ||
             allThree(player, "#box1", "#box4", "#box7") ||
             allThree(player, "#box2", "#box5", "#box8") ||
             allThree(player, "#box3", "#box6", "#box9") ||
             allThree(player, "#box1", "#box5", "#box9") ||
             allThree(player, "#box3", "#box5", "#box7");
      };
    function allThree(player, squareOne, squareTwo, squareThree) {
      if ((squareOne[0] === player) && (squareTwo[0] === player) && (squareThree[0] === player))
        return squareOne[1] + squareTwo[1] + squareThree[1];
    }

  // Remember: prototypes are shared functions between all game instances
  
  // `Game.prototype.init` kicks off a new game with a board and two players

  // A starter Board constructor.
     

    //Tracks the cells of the board instance
    //this.$cells = ...
      //var $myDiv = $("")
    //Store any other properties that board may have below, such as a reset option

  // Start the game!
  var game = new Game();
  // game.board();


});


