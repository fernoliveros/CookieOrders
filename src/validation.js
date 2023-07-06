const ADD = "add";
const REMOVE = "rm";
const LIST = "ls";
const validCommands = [ADD, REMOVE, LIST];

function validateCommand(cmds) {
  const command = cmds[0];
  if (!validCommands.includes(command)) {
    console.error(`Invalid Command: ${command}\n`);
    return false;
  }

  switch (command) {
    case ADD:
      return validateAdd(cmds);
    case REMOVE:
      return validateRemove(cmds);
    case LIST:
      return true;
    default:
      console.error(`Invalid Command: ${command}`);
      return false;
  }
}

function validateAdd(cmds) {
  if (cmds.length < 3) {
    console.error("Not enough input arguments\n");
    return false;
  }
  const amount = cmds[1];
  if (!isNumber(amount)) {
    console.error(`Amount ${amount} is not a valid number\n`);
    return false;
  }
  return true;
}

function validateRemove(cmds) {
  if (cmds.length < 2) {
    console.error("Not enough input arguments\n");
    return false;
  }
  return true;
}

function isNumber(val) {
  return /^[0-9]+$/.test(val);
}

module.exports = { validateCommand, ADD, REMOVE, LIST };
