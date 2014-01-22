$(function() {

  //    Create the board by literally appending rows and columns of colored divs
  //    with text inside each giving board number.

  var board = $(".board");

  var row = $("<div class ='row'/>");
  board.prepend(row);
  
  var square1 = $("<div class='square' id='1'/>");
  row.append(square1);
  var number = 1;
  square1.text(number)
  square1.attr('data-number', number);

  var square2 = $("<div class='square' id='2'/>");
  row.append(square2);
  number = 2;
  square2.text(2);
  square2.attr('data-number', number);  

  var square3 = $("<div class='square' id='3'/>");
  row.append(square3);
  number = 3;
  square3.text(3);
  square3.attr('data-number', number);

  var row2 = $("<div class ='row'/>");
  board.prepend(row2);

  var square4 = $("<div class='square' id='4'/>");
  row2.append(square4);
  number = 4;
  square4.text(4);
  square4.attr('data-number', number);

  var square5 = $("<div class='square' id='5'/>");
  row2.append(square5);
  number = 5;
  square5.text(5);
  square5.attr('data-number', number);

  var square6 = $("<div class='square' id='6'/>");
  row2.append(square6);
  number = 6;
  square6.text(6);
  square6.attr('data-number', number);

  var row3 = $("<div class ='row'/>");
  board.prepend(row3);

  var square7 = $("<div class='square' id='7'/>");
  row3.append(square7);
  number = 7;
  square7.text(7);
  square7.attr('data-number', number);

  var square8 = $("<div class='square' id='8'/>");
  row3.append(square8);
  number = 8;
  square8.text(8);
  square8.attr('data-number', number);

  var square9 = $("<div class='square' id='9'/>");
  row3.append(square9);
  number = 9;
  square9.text(9);
  square9.attr('data-number', number);

  // We define the components of game movement with this object
  var tictactoe = {
      stage: $('.stage'),
      // Associative array that keeps track of special squares
      initialize: function() {
        //Initialize controls.
        this.board = this.stage.find(".board");
        this.reset_button = this.stage.find(".reset");

	this.square1 = this.stage.find("#1");
        
	this.square2 = this.stage.find("#2");
	this.square3 = this.stage.find("#3");
	this.square4 = this.stage.find("#4");
	this.square5 = this.stage.find("#5");
	this.square6 = this.stage.find("#6");
	this.square7 = this.stage.find("#7");
	this.square8 = this.stage.find("#8");
	this.square9 = this.stage.find("#9");

        this.square1.click(this.move.bind(this, {val: "#1"}));
        this.square2.click(this.move.bind(this, {val: "#2"}));
        this.square3.click(this.move.bind(this, {val: "#3"}));
        this.square4.click(this.move.bind(this, {val: "#4"}));
        this.square5.click(this.move.bind(this, {val: "#5"}));
        this.square6.click(this.move.bind(this, {val: "#6"}));
        this.square7.click(this.move.bind(this, {val: "#7"}));
        this.square8.click(this.move.bind(this, {val: "#8"}));
        this.square9.click(this.move.bind(this, {val: "#9"}));
        //Initialize variables.
        this.player_turn = 1;
      },
      reset: function() {
        this.player_turn = 1;
        this.square1.text("1");
        this.square2.text("2");
        this.square3.text("3");
        this.square4.text("4");
        this.square5.text("5");
        this.square6.text("6");
        this.square7.text("7");
        this.square8.text("8");
        this.square9.text("9");
      },
      move: function(val) {
        var x = this.stage.find(val.val)
        if(this.player_turn == 1) {
        if(x.text() != "X" && x.text() != "O") {
        x.text("X");
        }
        }
        else {
        if(x.text() != "X" && x.text() != "O") {
        x.text("O");
        }
        }
        if(this.player_turn==1) {
           this.player_turn=2;
        }
        else if(this.player_turn==2) {
           this.player_turn=1
        }

        if(this.square1.text() == this.square2.text() && this.square2.text() == this.square3.text()) {
           this.reset()
        }
        if(this.square4.text() == this.square5.text() && this.square5.text() == this.square6.text()) {
           this.reset()
        }
        if(this.square7.text() == this.square8.text() && this.square8.text() == this.square9.text()) {
           this.reset()
        }
        if(this.square7.text() == this.square4.text() && this.square4.text() == this.square1.text()) {
           this.reset()
        }
        if(this.square2.text() == this.square5.text() && this.square2.text() == this.square8.text()) {
           this.reset()
        }
        if(this.square3.text() == this.square6.text() && this.square6.text() == this.square9.text()) {
           this.reset()
        }
        if(this.square1.text() == this.square5.text() && this.square5.text() == this.square9.text()) {
           this.reset()
        }
        if(this.square7.text() == this.square5.text() && this.square5.text() == this.square3.text()) {
           this.reset()
        }
        if(this.square1.text()!="1" && this.square2.text()!="2" && this.square3.text()!="3" && this.square4.text()!="4"
           && this.square5.text()!="5" && this.square6.text()!="6" && this.square7.text()!="7" && this.square8.text()!="8"
           && this.square9.text()!="9") {
           this.reset()
        }
        
      }

  };
  tictactoe.initialize();
});
