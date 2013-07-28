//Setup stuff.
$(function() {
  //Generate board.
  var board = $(".board");
  for (var i = 0; i < 10; i++) {
    var row = $("<div class ='row'/>");
    board.prepend(row);
    for (var j = 1; j <= 10; j++) {
      var square = $("<div class='square'/>");
      row.append(square);
      var number = (i * 10);
      if (i % 2 == 0) {
        number += j;
      } else {
        number += (10 - j + 1);
      }
      square.text(number);
      square.attr('data-number', number);
    }
  }
  //Initialize game.
  var stage = $(".stage");
  var sNl = {
    14: 48,
    19: 60,
    55: 76,
    69: 90,
    78: 97,
    99: 29,
    47: 18,
    25: 7
  };
  var game = new ScriptEd.SnakesAndLadders(stage, sNl);
  game.initialize();
});

var ScriptEd = {};

ScriptEd.SnakesAndLadders = function(stage, snakesAndLadders) {
  this.stage = stage;
  this.snakesAndLadders = snakesAndLadders;
};

ScriptEd.SnakesAndLadders.prototype = {
  initialize: function() {
    //Initialize controls.
    this.rollButton = this.stage.find(".roll");
    this.resetButton = this.stage.find(".reset");
    this.dieDisplay = this.stage.find(".die");
    this.squareDisplay = this.stage.find(".current_square");
    this.board = this.stage.find(".board");
    this.squares = this.stage.find(".square");
    //Attach events.
    this.rollButton.click(this.rollDie.bind(this));
    this.resetButton.click(this.reset.bind(this));
    //Initialize variables.
    this.currentSquare = 1;
    this.movements = [];
    this.setMovements();
    this.movementTimeout = null;
    //Set display.
    this.updateCurrentSquare();
  },
  reset: function() {
    this.currentSquare = 1;
    this.updateCurrentSquare();
    this.waiting = false;
    clearTimeout(this.movementTimeout);
    this.dieDisplay("Roll the die!");
  },
  setMovements: function() {
    for (var i = 1; i <= 100; i++) {
      var nextSquare = this.snakesAndLadders[i];
      this.movements[i] = {
        end: nextSquare || i
      };
      if (nextSquare) {
        var square = this.squares.filter('[data-number=' + i + ']');
        if (nextSquare > i) {
           square.addClass('ladder');
        } else {
          square.addClass('snake');
        }
      }
    }
  },
  rollDie: function() {
    if (!this.waiting) {
      //Find random number.
      var numberRolled = Math.floor(Math.random() * (6 - 1 + 1)) +1;
      //Show in display.
      this.dieDisplay.text("You rolled a " + numberRolled + ".");
      //Make move.
      this.move(numberRolled);
    }
  },
  move: function(roll) {
    this.currentSquare = this.currentSquare + roll;
    this.updateCurrentSquare();
    if (this.currentSquare < 100) {
      this.checkSnakesAndLadders();
    }
  },
  checkSnakesAndLadders: function() {
    var newSquare = this.movements[this.currentSquare].end;
    if (newSquare != this.currentSquare) {
      this.waiting = true;
      if (newSquare > this.currentSquare) {
        this.squareDisplay.text(this.currentSquare + ": Ooo!  Let's see just how high this ladder leads!");
      } else {
        this.squareDisplay.text(this.currentSquare + ": Whuh-oh...Hopefully your fall won't be too far!");
      }
      this.currentSquare = newSquare;
      this.movementTimeout = setTimeout(this.updateCurrentSquare.bind(this), 3000);
    }
  },
  updateCurrentSquare: function() {
    this.squares.removeClass("current");
    if (this.currentSquare >= 100) {
      this.squareDisplay.text("Good job! You won!");
      this.stage.addClass("winner");
      return;
    }
    var newSquare = this.squares.filter('[data-number=' + this.currentSquare + ']');
    this.squareDisplay.text(this.currentSquare);
    newSquare.addClass('current');
    this.waiting = false;
  }
};
