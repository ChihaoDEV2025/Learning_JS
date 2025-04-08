//Less flexible and hard to scale up



function getPrice(originalPrice, typePromotion = "default") {
   //preOrder => 20% discount b=> originalPrice * 0.8
   if (typePromotion == "preOrder") return originalPrice * 0.8;
   //promotion: discount 10 % (originalPrice <= 200) : discount at least 30
 
   if (typePromotion == "blackFriday")
     return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
 
   //blackFriday: discount 20 % (originalPrice <= 200) : discount at least 30
   if (typePromotion == "promotion")
     return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 30;
 
   if(typePromotion == 'default') return originalPrice;
}

let price = 200;
let type = "preOrder";
console.log(`The price of product during ${type} is ${getPrice(price, type)}`);
