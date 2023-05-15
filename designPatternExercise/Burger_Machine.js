class Burger {
  constructor(components) {
    this.bun = components.bun;
    this.patty = components.patty;
    this.cheese = components.cheese;
    this.sauce = components.sauce;
    this.toppings = components.toppings;
    this.price = components.price;
  }

  describe() {
    console.log(
      `Burger with ${this.patty} patty\nCheese: ${this.cheese}\nSauce: ${
        this.sauce
      }\nToppings: ${this.toppings.join(", ")}\nBun Type: ${
        this.bun
      } bun\nTotal cost: $${this.price}\n`
    );
  }
}

class BurgerMachine {
  constructor() {
    this.bun = "regular";
    this.patty = "beef";
    this.cheese = false;
    this.sauce = "ketchup";
    this.toppings = [];
    this.price = 7;
  }

  defaultBurger() {
    return new Burger({
      bun: this.bun,
      patty: this.patty,
      cheese: this.cheese,
      sauce: this.sauce,
      toppings: this.toppings,
      price: this.price,
    });
  }

  withBun(bun, price) {
    this.bun = bun;
    this.price += price;
    return this;
  }

  withPatty(patty, price) {
    this.patty = patty;
    this.price += price;
    return this;
  }

  withCheese(cheese, price) {
    this.cheese = cheese;
    this.price += price;
    return this;
  }

  withSauce(sauce, price) {
    this.sauce = sauce;
    this.price += price;
    return this;
  }

  withToppings(toppings, price) {
    this.toppings = toppings;
    this.price += toppings.length * price;
    return this;
  }

  create() {
    return new Burger(this);
  }
}

// Example usage
const burger1 = new BurgerMachine()
  .withPatty("chicken", 5.99)
  .withSauce("mayonnaise", 0.99)
  .withToppings(["lettuce", "tomato"], 0.5)
  .create();
burger1.describe();

const burger2 = new BurgerMachine()
  .withBun("sesame seed", 1.5)
  .withPatty("vegetarian", 4.99)
  .withCheese(true, 1.99)
  .withSauce("mustard", 0.99)
  .withToppings(["onion", "pickle"], 0.5)
  .create();
burger2.describe();

const defaultBurger = new BurgerMachine().create();
defaultBurger.describe();
