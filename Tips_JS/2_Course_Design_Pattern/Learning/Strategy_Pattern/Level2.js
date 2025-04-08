//Using functions for each one


//Separating them into function, but using object is higher level
let preOrderPrice = (originalPrice)=>{
    return originalPrice * 0.8
}

let blackFridayPrice = (originalPrice)=>{
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

let promotionPrice= (originalPrice)=>{
    return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 30
}

let defaultPrice = (originalPrice)=>{
    return originalPrice;
}


//Convert if - or many cases into object
function getPrice(originalPrice, typePromotion = "default") {
    //preOrder => 20% discount b=> originalPrice * 0.8
    if (typePromotion == "preOrder") return preOrderPrice(originalPrice);
    //promotion: discount 10 % (originalPrice <= 200) : discount at least 30
  
    if (typePromotion == "blackFriday")
      return blackFridayPrice(originalPrice);
  
    //blackFriday: discount 20 % (originalPrice <= 200) : discount at least 30
    if (typePromotion == "promotion")
      return promotionPrice(originalPrice);
  
    if(typePromotion == 'default') return defaultPrice(originalPrice);
  }
  
  let price = 200;
  let type = "preOrder";
  console.log(`The price of product during ${type} is ${getPrice(price, type)}`);
  