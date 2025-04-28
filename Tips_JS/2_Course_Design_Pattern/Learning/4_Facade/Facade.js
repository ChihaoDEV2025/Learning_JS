class Discount {
  calc(value) {
    return value * 0.9;
  }
}

class Shipping {
  calc() {
    return 5;
  }
}

class fees {
  calc(value) {
    return value * 1.05;
  }
}

class ShoppeFacadePattern {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new fees();
  }
  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();

    return price;
  }
}

function buy(price) {
  const shoppe = new ShoppeFacadePattern();

  console.log(`Price::${shoppe.calc(price)}`);
}

buy(120000);
