// =============================== Base ===============================\
class Pizza {
  constructor(quantity) {
    this.quantity = quantity;
  }

  prepare() {}
  bake() {}
  cut() {}
  box() {}

  total() {
    return this.price * this.quantity;
  }
}

// =============================== Extended Classes to Pizza ===============================\
class CheesePizza extends Pizza {
  constructor(quantity) {
    super(quantity);
    this.price = 10.99;
  }

  prepare() {
    console.log("Preparing " + this.quantity + " cheese pizzas");
  }

  bake() {
    console.log("Baking " + this.quantity + " cheese pizzas");
  }

  cut() {
    console.log("Cutting " + this.quantity + " cheese pizzas");
  }

  box() {
    console.log("Boxing " + this.quantity + " cheese pizzas");
  }
}

class PepperoniPizza extends Pizza {
  constructor(quantity) {
    super(quantity);
    this.price = 12.99;
  }

  prepare() {
    console.log("Preparing " + this.quantity + " pepperoni pizzas");
  }

  bake() {
    console.log("Baking " + this.quantity + " pepperoni pizzas");
  }

  cut() {
    console.log("Cutting " + this.quantity + " pepperoni pizzas");
  }

  box() {
    console.log("Boxing " + this.quantity + " pepperoni pizzas");
  }
}

class PizzaFactory {
  // =============================== Method ===============================\
  createPizza(type, quantity) {
    if (type === "cheese") {
      return new CheesePizza(quantity);
    }
    if (type === "pepperoni") {
      return new PepperoniPizza(quantity);
    } else {
      throw new Error("invalid pizza");
    }
  }
}

const factory = new PizzaFactory();
const pizza1 = factory.createPizza("cheese", 2);
const pizza2 = factory.createPizza("pepperoni", 3);
console.log(
  "Pizza 1 price: $" +
    pizza1.price.toFixed(2) +
    " x " +
    pizza1.quantity +
    " = $" +
    pizza1.total().toFixed(2)
);
console.log(
  "Pizza 2 price: $" +
    pizza2.price.toFixed(2) +
    " x " +
    pizza2.quantity +
    " = $" +
    pizza2.total().toFixed(2)
);
pizza1.prepare();
pizza1.bake();
pizza1.cut();
pizza1.box();
pizza2.prepare();
pizza2.bake();
pizza2.cut();
pizza2.box();
