$(function() {

  //    Create the board by literally appending rows and columns of colored divs
  //    with text inside each giving board number.

  var board = $(".board");
  for (var i = 0; i < 10; i++) {
    var row = $("<div class ='row'/>");
    board.prepend(row);
    for (var j = 1; j <= 10; j++) {
      var square = $("<div class='square'/>");
      row.append(square);
      var number = (i * 10);

      // test for odd or even row and assign number

      if (i % 2 == 0) { 
        number += j;
      } else {
        number += (10 - j + 1);
      }
      square.text(number);
      square.attr('data-number', number);
    }
  }

  // We define the components of game movement with this object
  var snakes_and_ladders = {
      stage: $('.stage'),
      // Associative array that keeps track of special squares
      snakes_and_ladders: {
          14: 48,
          19: 60,
          55: 76,
          69: 90,
          78: 97,
          99: 29,
          47: 18,
          25: 7
        },
      initialize: function() {
        //Initialize controls.
        this.roll_button = this.stage.find(".roll");
        this.reset_button = this.stage.find(".reset");
        this.die_display = this.stage.find(".die");
        this.square_display = this.stage.find(".current_square");
        this.board = this.stage.find(".board");
        this.squares = this.stage.find(".square");
        //Attach events.
        this.roll_button.click(this.rollDie.bind(this));
        this.reset_button.click(this.reset.bind(this));
        //Initialize variables.
        this.current_square = 1;
        this.movements = [];
        this.setMovements();
        this.movement_timeout = null;
        //Set display.
        this.updateCurrentSquare();
      },
      reset: function() {
        this.current_square = 1;
        this.updateCurrentSquare();
        this.waiting = false;
        clearTimeout(this.movement_timeout);
        this.die_display("Roll the die!");
      },
      //  populates an array called movements which directs the player's piece
      //  to the tile they end up on after arriving at a square.
      //  Afterwards, the function applies css classes to designate the squares
      //  that are snakes and ladders.
      setMovements: function() {
        for (var i = 1; i <= 100; i++) {
          var next_square = this.snakes_and_ladders[i];
          this.movements[i] = {
            end: next_square || i
          };
          if (next_square) {
            var square = this.squares.filter('[data-number=' + i + ']');
            if (next_square > i) {
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
          var number_rolled = Math.floor(Math.random() * 6) + 1;
          //Show in display.
          this.die_display.text("You rolled a " + number_rolled + ".");
          //Make move.
          this.move(number_rolled);
        }
      },
      move: function(roll) {
        this.current_square = this.current_square + roll;
        this.updateCurrentSquare();
        if (this.current_square < 100) {
          this.checkSnakesAndLadders();
        }
      },

      //  Here's where we check if we hit either a snake or a ladder.
      checkSnakesAndLadders: function() {
        var new_square = this.movements[this.current_square].end;
        if (new_square != this.current_square) {
          //  We set the variable waiting to make sure the pause after hitting
          //  a snake or ladder finished before the user can click the roll button again.
          this.waiting = true;
          if (new_square > this.current_square) {
            this.square_display.text(this.current_square + ": Ooo!  Let's see just how high this ladder leads!");
          } else {
            this.square_display.text(this.current_square + ": Whuh-oh...Hopefully your fall won't be too far!");
          }
          this.current_square = new_square;
          this.movement_timeout = setTimeout(this.updateCurrentSquare.bind(this), 3000);
        }
      },

      //  Moves the game piece to the square that was just rolled.
      updateCurrentSquare: function() {
        this.squares.removeClass("current");
        if (this.current_square >= 100) {
          this.square_display.text("Good job! You won!");
          this.stage.addClass("winner");
          return;
        }
        var new_square = this.squares.filter('[data-number=' + this.current_square + ']');
        this.square_display.text(this.current_square);
        new_square.addClass('current');
        this.waiting = false;
      }
  };
  snakes_and_ladders.initialize();
});
