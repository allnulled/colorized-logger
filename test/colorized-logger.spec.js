const {assert, expect} = require("chai");
const { ColorizedLogger } = require("../src/colorized-logger.js");
describe("ColorizedLogger API", function() {
	it("creates different loggers and respects the colors", function(done) {
		var i = 0;
		var dangerLogger = new ColorizedLogger("[danger-logger]", ["red", "bold", "underline", "bgWhite"], (msg) => i = msg === "[danger-logger] This should be red in white background." ? 10 : 1000);
		var debugLogger = new ColorizedLogger("[debug-logger]", ["green", "bold", "underline", "bgBlack"], (msg) => i = msg === "[debug-logger] This should be green in black background." ? 20 : 1000);
		var errorLogger = new ColorizedLogger("[error-logger]", ["yellow", "bold", "underline", "bgRed"], (msg) => i = msg === "[error-logger] This should be yellow in red background." ? 30 : 1000);
		expect(i).to.equal(0);
		dangerLogger.log("This should be red in white background.");
		dangerLogger.log("This should be red in white background.");
		dangerLogger.log("This should be red in white background.");
		dangerLogger.log("This should be red in white background.");
		expect(i).to.equal(10);
		debugLogger.log("This should be green in black background.");
		debugLogger.log("This should be green in black background.");
		debugLogger.log("This should be green in black background.");
		debugLogger.log("This should be green in black background.");
		expect(i).to.equal(20);
		errorLogger.log("This should be yellow in red background.");
		errorLogger.log("This should be yellow in red background.");
		errorLogger.log("This should be yellow in red background.");
		errorLogger.log("This should be yellow in red background.");
		expect(i).to.equal(30);
		done();
	});
	it("can create loggers without passing anything", function(done) {
		var emptyLogger = new ColorizedLogger();
		var emptyLogger2 = ColorizedLogger.create();
		emptyLogger.log();
		emptyLogger2.log();
		done();
	});
	it("can log anything and not only strings", function(done) {
		var simpleLogger = ColorizedLogger.create("[simple]", ["black", "bold", "underline", "bgWhite"]);
		simpleLogger.log("Hello world!", {
			word1: "Hello",
			word2: "world!"
		}, 
		-100, 
		function() {
			return 100 + 50 + 25;
		}, [
			true,
			false,
			undefined,
			null,
			() => {return 100;}
		]);
		done();
	});
	it("has special support for Error objects", function(done) {
		var logger = ColorizedLogger.create("[error-support-demo]", ["red", "bold", "underline", "bgYellow"]);
		logger.log("Some errors", new Error({
			name: "NameOfTheError",
			message: "Message of the error"
		}));
		done();
	});
});