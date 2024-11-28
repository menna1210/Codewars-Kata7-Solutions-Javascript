// Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    // If the string length is less than or equal to 4, no masking is needed
    if (cc.length<=4){return cc}
    
    // Mask all but the last four characters
    const maskedPart ="#".repeat(cc.length-4)
    const lastFour =cc.slice(-4);
    return maskedPart + lastFour
  }
  
  
  console.log(maskify("4556364607935616")); // Output: "############5616"
  console.log(maskify("64607935616"));     // Output: "#######5616"
   