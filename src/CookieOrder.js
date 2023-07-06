class CookieOrder {
  constructor(amount, variety) {
    this.amount = amount;
    this.variety = variety;
  }

  toString() {
    return `${this.amount} box${this.amount > 1 ? "es" : ""} of ${
      this.variety
    }`;
  }
}

module.exports = { CookieOrder };
