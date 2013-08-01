function getFortune() {
  // Set up an array of stock answers for the 8-ball's responses
  var answers = [ "Signs point to yes.", "Yes.", "Reply hazy, try again.",
                  "Without a doubt.", "My sources say no.", "As I see it, yes.",
                  "You may rely on it.", "Concentrate and ask again.",
                  "Outlook not so good.", "It is decidedly so.",
                  "Better not tell you now.",
                  "Very doubtful.", "Yes - definitely.", "It is certain.",
                  "Cannot predict now.", "Most likely.", "Ask again later.",
                  "My reply is no.", "Outlook good.", "Don't count on it." ];

  // Pick a random number to use as an array index 
  var choice = Math.floor(Math.random() * answers.length);

  // Replace the contents of div id="answer" with the answer at the random index
  $('#answer').text(answers[choice]);
}
