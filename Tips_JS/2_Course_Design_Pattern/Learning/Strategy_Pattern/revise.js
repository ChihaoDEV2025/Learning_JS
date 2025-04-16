//Shoppe have many occasions => use function to get price of product

/*
        preOrder : originalPrice * 0.8 (20% discount)
        promotion - sales: originalPrice <= 200 ? originalPrice *0.9 : originalPrice -30
         blackFriday:
       ...
        default : return originalPrice
       more event 

*/

//Level 1

function getPrice(originalPrice, promotionType = "default") {
  if (promotionType === "preOrder") return originalPrice * 0.8;

  if (promotionType === "promotion")
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;

  if (promotionType === "blackFriday")
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;

  if (promotionType === "default") return originalPrice;
}
//Cons :
//    too much if - else
//     can impact on the whole system if changing one
//  cannot be interchangeable or reusable

//Level 2

function preOrderPrice(originalPrice) {
  return originalPrice * 0.8;
}

function promotionPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

function blackFridayPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

function defaultPrice(originalPrice) {
  return originalPrice;
}

function getPrice(originalPrice, promotionType = "default") {
  if (promotionType === "preOrder") return preOrderPrice(originalPrice);

  if (promotionType === "promotion") return promotionPrice(originalPrice);

  if (promotionType === "blackFriday") return blackFridayPrice(originalPrice);

  if (promotionType === "default") return defaultPrice(originalPrice);
}

// Fix: Converting without affecting the whole system
//     can be interchangeable and reusable

// cons: too many if -else

//Level 3: fix the rest of cons => use object

function preOrderPrice(originalPrice) {
  return originalPrice * 0.8;
}

function promotionPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

function blackFridayPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

function defaultPrice(originalPrice) {
  return originalPrice;
}

const getPromotion = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  blackFriday: blackFridayPrice,
  default: defaultPrice,
};

function getPrice(originalPrice, promotionType = "default") {
  return getPromotion[promotionType](originalPrice);
}

//test
let price = 200;
let type = "blackFriday";

console.log(`The price of product during ${type} is ${getPrice(price, type)}`);
