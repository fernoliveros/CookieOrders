const readline = require("readline");
const { validateCommand, ADD, REMOVE, LIST } = require("./validation");
const { MasterOrder } = require("./MasterOrder");
const { CookieOrder } = require("./CookieOrder");

function main() {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "",
  });

  console.log("\nWelcome to Cookie Order, how can we help you today?");
  console.log("\tCommands: add, rm, ls");
  console.log(
    "\tExample sequence: add 3 Chocolate, add 5 Shortbread, ls -i, rm Chocolate, ls\n"
  );
  const masterOrder = new MasterOrder();

  rl.on("line", (cmd) => {
    const splitCmd = cmd.split(" ");
    const command = splitCmd[0];

    if (validateCommand(splitCmd)) {
      switch (command) {
        case ADD:
          const newOrder = createOrder(splitCmd);
          masterOrder.addOrder(newOrder);
          break;
        case REMOVE:
          const variety = splitCmd.slice(1).join(" ");
          masterOrder.removeOrders(variety);
          break;
        case LIST:
          const itemized = splitCmd[1] === "-i";
          masterOrder.listOrders(itemized);
          break;
        default:
          console.error(`Error - ${command}`);
          return;
      }
    }
  });

  rl.on("close", () => {
    console.log("Enjoy your cookies!");
    process.exit(0);
  });

  return rl;
}

function createOrder(cmds) {
  const amount = Number(cmds[1]);
  const variety = cmds.slice(2).join(" ");
  return new CookieOrder(amount, variety);
}

module.exports = { main };
