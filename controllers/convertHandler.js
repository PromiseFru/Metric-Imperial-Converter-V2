/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var firstCharIndex = input.match('[a-zA-Z]').index;
    var result = input.slice(0, firstCharIndex);
    
    if(!result) return result = 1;
    if(result.match(/\d+\/\d+\/\d+/)){
      console.log("invalid number");
      throw new Error('invalid number');
    }

    return eval(result);
  };
  
  this.getUnit = function(input) {
    var firstCharIndex = input.match('[a-zA-Z]').index;
    var result = input.slice(firstCharIndex);
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
