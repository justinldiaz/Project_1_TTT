// OOP Tic Tac Toe boilerplate codewindow.addEventListener('load', function() {
// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`
  var board = $('body');
  var squares = $('.square p');
  var squareBorders = $('.square');
  var reset = $('.reset');
  var playCount = 0;
  var xConsecWins = 0;
  var oConsecWins = 0;

  function Game() {
    //Create a new instance of player 1
    //this.player1 = ...

    //Do the same for a player 2
    //this.player2 = ...
    
    //Create the board
    //this.board = ...
  }
  function Player() {
    this.team = X || O
    //Is the player X or O?
    //this.team = ... 
  
  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function() {
    //Switch players
  };
  };
  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    //
  };

  
  // A starter Board constructor.
  function Board() {
    this.$cells = (".box")
    this.$cells = $(".box").click(function(){
       
    }

    //Tracks the cells of the board instance
    //this.$cells = ...

    //Store any other properties that board may have below, such as a reset option
  };

  // Start the game!
  var game = new Game();
  game.init();

});