
function GetWithdrawal(accountBalance){
	var withdrawalAmount;
	withdrawalAmount = $("#valueinput").val();
	if(isNaN(withdrawalAmount)){
		$(".display").html(withdrawalAmount + " is not a number.");
	}else if(withdrawalAmount > accountBalance){
		$(".display").html("You have insufficient funds.");
	}else if(withdrawalAmount < 0){
		$(".display").html("You cannot withdraw a negative amount.");
	}
	balance -= withdrawalAmount;
	displayBalance();
	clearInput();
	
}

function GetDeposit(){
	var depositAmount;
	depositAmount = $("#valueinput").val();
	if(isNaN(depositAmount)){
		$(".display").html(depositAmount + " is not a number.");
	}else if(depositAmount < 0){
		$(".display").html("You cannot deposit a negative amount.");
	}
	balance += parseInt(depositAmount);
	displayBalance();
	clearInput();
}

function displayBalance(){
	$(".display").html("Your current balance is: " + balance);
}

function clearInput(){
	$("#valueinput").val("");
}

var balance = 100.00;
var operation = 0;