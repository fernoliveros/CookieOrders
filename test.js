const { main } = require("./src/main");

/**
 *  Test data below contains a sequence of commands
 *  and the corresponding expected outputs.
 */
const testData = [
  ["add 1 Chocolate Chip", "Added 1 box of Chocolate Chip"],
  ["add 5 Shortbread", "Added 5 boxes of Shortbread"],
  ["add 2 Macaroon", "Added 2 boxes of Macaroon"],
  ["add 3 Chocolate Chip", "Added 3 boxes of Chocolate Chip"],
  ["ls", "11 boxes of cookies ordered"],
  ["rm Chocolate Chip", "Removed 4 boxes of Chocolate Chip"],
  ["ls", "7 boxes of cookies ordered"],
];

describe("Unit Tests for Cookie Order", () => {
  it("should add some orders, remove chocolate chip, and list the orders", () => {
    const logSpy = spyOn(console, "log").and.callThrough();
    const rl = main();
    testData.forEach(([cmd, expectedOutput]) => {
      rl.write(cmd + "\n");
      expect(latestLog(logSpy)).toEqual(expectedOutput);
    });
  });
});

function latestLog(spy) {
  return spy.calls.mostRecent().args[0].trim();
}
