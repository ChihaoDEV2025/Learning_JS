//Using functions for each one

//Separating them into function
let preOrderPrice = (originalPrice) => {
  return originalPrice * 0.8;
};

let blackFridayPrice = (originalPrice) => {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
};

let promotionPrice = (originalPrice) => {
  return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 30;
};

let defaultPrice = (originalPrice) => {
  return originalPrice;
};

//key : value - method => get[key](parameter) = function(parameter)
const getPriceStrategies = {
  preOrder: preOrderPrice,
  promotion: preOrderPrice,
  blackFriday: blackFridayPrice,
  default: defaultPrice,
};

//Convert if - or many cases into object
function getPrice(originalPrice, typePromotion = "default") {
  return getPriceStrategies[typePromotion](originalPrice);
}

let price = 200;
let type = "blackFriday";
console.log(`The price of product during ${type} is ${getPrice(price, type)}`);
