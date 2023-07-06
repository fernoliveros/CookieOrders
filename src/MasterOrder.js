const { CookieOrder } = require("./CookieOrder");

class MasterOrder {
  constructor() {
    this.orders = new Map();
  }

  addOrder(cookieOrder) {
    const { amount, variety } = cookieOrder;
    const newAmount = this.orders.has(variety)
      ? this.orders.get(variety) + amount
      : amount;
    this.orders.set(variety, newAmount);
    console.log(`Added ${cookieOrder.toString()}\n`);
  }

  removeOrders(variety) {
    if (this.orders.has(variety)) {
      const amount = this.orders.get(variety);
      this.orders.delete(variety);
      console.log(
        `Removed ${amount} box${amount > 1 ? "es" : ""} of ${variety}\n`
      );
      return;
    }
    console.log(`No cookies of type "${variety}" have been ordered\n`);
  }

  listOrders(itemized) {
    let total = 0;
    for (let amount of this.orders.values()) {
      total += amount;
    }
    const totalStr = `${total} boxes of cookies ordered`;

    if (itemized && total > 0) {
      console.log(totalStr + ":");
      this.listItemizedOrders();
    } else {
      console.log(totalStr + "\n");
    }
  }

  listItemizedOrders() {
    const odrersString = [];
    if (this.orders.size > 0) {
      this.orders.forEach((value, key) => {
        odrersString.push(new CookieOrder(value, key).toString());
      });
      console.log(odrersString.map((it) => `\t${it}`).join("\n") + "\n");
    }
  }
}

module.exports = { MasterOrder };
