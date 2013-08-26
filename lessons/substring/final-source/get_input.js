exports.get_input = function(message) { // <-- no callback here
		var prompt = require('prompt');
		prompt.message = "";
		prompt.delimiter = "";

		 var properties = [
		   {
		     name: "foo",
			 message: message + ":"
		   }
		 ];

		prompt.start();
		var result = prompt.get.sync(null, properties);

		return result.foo;
	}